import { Module } from '@nestjs/common';
import { GatewayModule } from 'src/gateway/gateway.module';
import { DateService } from './date.service';
import { GasStationService } from './gas-station.service';
import { JokeService } from './joke.service';
import { MessageService } from './message.service';
import { NewsService } from './news.service';
import { TrafficService } from './traffic.service';
import { WeatherService } from './weather.service';

@Module({
  imports: [
    GatewayModule,
  ],
  providers: [
    MessageService,
    WeatherService,
    DateService,
    TrafficService,
    GasStationService,
    NewsService,
    JokeService,
  ],
  exports: [
    MessageService,
  ]
})
export class MessageModule {}
