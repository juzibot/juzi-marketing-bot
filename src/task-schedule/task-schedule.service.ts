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

    // 本地推送加油信息消息
    // await this.sendGasMessageTask();
    // 本地推送早报消息
    // await this.sendMorningReportTask();
    // 本地推送新闻消息
    // await this.sendDailyNewsTask();
    // 本地推送笑话
    // await this.sendDailyJokeTask();
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
    const timeConfig = this.configService.get<TimeConfig>('timeConfig');

    for (const roomConfig of roomConfigList) {
      try {
        const message = await this.messageService.getGasMessage(roomConfig.stationId);
        await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
        const miniProgram = miniProgramConfig.find(m => m.stationId === roomConfig.stationId);
        if (miniProgram) {
          await this.sleep(timeConfig.messageInterval);
          await this.mhGatewayService.sendMiniProgramMessage(roomConfig.chatId, miniProgram.payload);
        }
      } catch (e) {
        this.logger.error(e?.stack || e?.message);
      }
      await this.sleep(timeConfig.roomInterval);
    }
  }

  async sendMorningReportTask () {
    this.logger.log(`sending morning report...`);
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    const timeConfig = this.configService.get<TimeConfig>('timeConfig');
    for (const roomConfig of roomConfigList) {
      try {
        const message = await this.messageService.getMorningReport(roomConfig.city);
        await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
      } catch (e) {
        this.logger.error(e?.stack || e?.message);
      }
      await this.sleep(timeConfig.roomInterval);
    }
  }

  async sendDailyNewsTask () {
    this.logger.log(`sending daily news task...`);
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    const timeConfig = this.configService.get<TimeConfig>('timeConfig');
    const message = await this.messageService.getNews();
    for (const roomConfig of roomConfigList) {
      try {
        await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
      } catch (e) {
        this.logger.error(e?.stack || e?.message);
      }
      await this.sleep(timeConfig.roomInterval);
    }
  }

  async sendDailyJokeTask () {
    this.logger.log(`sending daily joke task...`);
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    const timeConfig = this.configService.get<TimeConfig>('timeConfig');
    for (const roomConfig of roomConfigList) {
      try {
        const message = await this.messageService.getJoke();
        await this.mhGatewayService.sendTextMessage(roomConfig.chatId, message);
      } catch (e) {
        this.logger.error(e?.stack || e?.message);
      }
      await this.sleep(timeConfig.roomInterval);
    }
  }

  private getCronFromTime (time: string) {
    const t = moment(time, 'hh:mm');
    const hour = t.hour();
    const minute = t.minute();
    return `0 ${minute} ${hour} * * *`;
  }

  private async sleep (ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}
