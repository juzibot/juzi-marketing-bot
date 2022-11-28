import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from './config/configuration';
import { GatewayModule } from './gateway/gateway.module';
import { MessageModule } from './message/message.module';
import { TaskScheduleModule } from './task-schedule/task-schedule.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    MessageModule,
    GatewayModule,
    TaskScheduleModule,
  ],
})
export class AppModule {}
