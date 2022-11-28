import { Inject, Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import moment from 'moment';
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
    this.scheduleDailyNewsJob(timeConfig.newsMessage);
    this.scheduleDailyJokeJob(timeConfig.jokeMessage);
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
    });
    this.scheduleRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Scheduled daily news job at ${time}`);
  }

  scheduleDailyJokeJob (time: string) {
    const name = 'daily-joke-cron-job';
    const job = new CronJob(this.getCronFromTime(time), async () => {
      await this.sendDailyJokeTask()
    });
    this.scheduleRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(`Scheduled daily joke job at ${time}`);
  }

  async sendMorningReportTask () {
    this.logger.log(`sending morning report...`);
    const roomConfigList = this.configService.get<RoomConfig[]>('roomConfigList');
    for (const roomConfig of roomConfigList) {
      const message = await this.messageService.getMorningReport(roomConfig.city, roomConfig.stationId);
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
