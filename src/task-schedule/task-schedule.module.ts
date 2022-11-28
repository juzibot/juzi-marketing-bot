import { Module } from '@nestjs/common';
import { GatewayModule } from 'src/gateway/gateway.module';
import { MessageModule } from 'src/message/message.module';
import { TaskScheduleService } from './task-schedule.service';

@Module({
  imports: [
    MessageModule,
    GatewayModule,
  ],
  providers: [
    TaskScheduleService,
  ],
})
export class TaskScheduleModule {}
