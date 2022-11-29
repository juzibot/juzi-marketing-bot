import { Inject, Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import moment from 'moment';
import { MiniProgramConfig } from 'src/config/mini-program.config';
import { RoomConfig } from 'src/config/room.config';
import { TimeConfig } from 'src/config/time.config';
import { MhGatewayService } from 'src/gateway/mh-gateway.service';
import { MessageService } from 'src/message/message.service';

@Injectable()
export class TaskScheduleService implements OnApplicationBootstrap {
  @Inject()
  private readonly configService: ConfigService;

  @Inject()
  private readonly messageService: MessageService;

  @Inject()
  private readonly scheduleRegistry: SchedulerRegistry;

  @Inject()
  private readonly mhGatewayService: MhGatewayService;

  private readonly logger = new Logger(TaskScheduleService.name)

  async onApplicationBootstrap() {
    await this.scheduleTasks()
  }

  async scheduleTasks () {
    this.logger.log(`scheduleTasks()`);
    const timeConfig = this.configService.get<TimeConfig>('timeConfig');
    this.scheduleMorningReportJob(timeConfig.morningReport);
    this.scheduleMorningGasJob(timeConfig.morningGasMessage);
    this.scheduleDailyNewsJob(timeConfig.newsMessage);
    this.scheduleDailyJokeJob(timeConfig.jokeMessage);
    this.scheduleAfternoonGasJob(timeConfig.afternoonGasMessage);
  }

  scheduleMorningReportJob (time: string) {
    const name = 'morning-report-cron-job';
    const job = new CronJob(this.getCronFromTime(time), async () => {
      await this.sendMorningReportTask()
    }, null, false, 'Asia/Shanghai');
    this.scheduleRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Scheduled morning report job at ${time}`);
  }

  scheduleDailyNewsJob (time: string) {
    const name = 'daily-news-cron-job';
    const job = new CronJob(this.getCronFromTime(time), async () => {
      await this.sendDailyNewsTask()
    }, null, false, 'Asia/Shanghai');
    this.scheduleRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Scheduled daily news job at ${time}`);
  }

  scheduleDailyJokeJob (time: string) {
    const name = 'daily-joke-cron-job';
    const job = new CronJob(this.getCronFromTime(time), async () => {
      await this.sendDailyJokeTask()
    }, null, false, 'Asia/Shanghai');
    this.scheduleRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Scheduled daily joke job at ${time}`);
  }

  scheduleMorningGasJob (time: string) {
    const name = 'morning-gas-cron-job';
    const job = new CronJob(this.getCronFromTime(time), async () => {
      await this.sendGasMessageTask()
    }, null, false, 'Asia/Shanghai');
    this.scheduleRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Scheduled morning gas job at ${time}`);
  }

  scheduleAfternoonGasJob (time: string) {
    const name = 'afternoon-gas-cron-job';
    const job = new CronJob(this.getCronFromTime(time), async () => {
      await this.sendGasMessageTask()
    }, null, false, 'Asia/Shanghai');
    this.scheduleRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Scheduled afternoon gas job at ${time}`);
  }

  async sendGasMessageTask () {
    this.logger.log(`sending gas message...`);
    const miniProgramConfig = this.configService.get<MiniProgramConfig[]>('miniProgramConfig');
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    for (const roomConfig of roomConfigList) {
      const message = await this.messageService.getGasMessage(roomConfig.stationId);
      await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
      const miniProgram = miniProgramConfig.find(m => m.stationId === roomConfig.stationId);
      if (miniProgram) {
        await this.mhGatewayService.sendMiniProgramMessage(roomConfig.chatId, miniProgram.payload);
      }
    }
  }

  async sendMorningReportTask () {
    this.logger.log(`sending morning report...`);
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    for (const roomConfig of roomConfigList) {
      const message = await this.messageService.getMorningReport(roomConfig.city);
      await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
    }
  }

  async sendDailyNewsTask () {
    this.logger.log(`sending daily news task...`);
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    const message = await this.messageService.getNews();
    for (const roomConfig of roomConfigList) {
      await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
    }
  }

  async sendDailyJokeTask () {
    this.logger.log(`sending daily joke task...`);
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    for (const roomConfig of roomConfigList) {
      const message = await this.messageService.getJoke();
      await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
    }
  }

  private getCronFromTime (time: string) {
    const t = moment(time, 'hh:mm');
    const hour = t.hour();
    const minute = t.minute();
    return `0 ${minute} ${hour} * * *`;
  }
}
