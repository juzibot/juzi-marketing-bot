import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { WeatherInfoResult, CalendarInfoResult, JokeInfoResult } from './interface';
import { NewsInfoResult } from './interface/news.interface';

@Injectable()
export class JuheGatewayService {
  @Inject()
  private readonly configService: ConfigService;

  async getCalendarInfo(date: string) {
    const juheDefaultEndpoint = this.configService.get<string>('juheDefaultEndpoint');
    const juheCalendarKey = this.configService.get<string>('juheCalendarKey');
    const url = `${juheDefaultEndpoint}/calendar/day?key=${juheCalendarKey}&date=${date}`;
    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    const resultData = res.data as CalendarInfoResult;
    return resultData;
  }

  async getWeatherInfo(city: string) {
    const juheWeatherEndpoint = this.configService.get<string>('juheWeatherEndpoint');
    const juheWeatherKey = this.configService.get<string>('juheWeatherKey');
    const url = `${juheWeatherEndpoint}/simpleWeather/query?city=${encodeURI(city)}&key=${juheWeatherKey}`;
    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    const resultData = res.data as WeatherInfoResult;
    return resultData;
  }

  async getJokeInfo() {
    const juheDefaultEndpoint = this.configService.get<string>('juheDefaultEndpoint');
    const juheJokeKey = this.configService.get<string>('juheJokeKey');
    const time = Math.floor(Date.now() / 1000);
    const url = `${juheDefaultEndpoint}/joke/content/list.php?key=${juheJokeKey}&time=${time}&sort=desc&pagesize=20`;
    const res = await axios.get(url);
    const resultData = res.data as JokeInfoResult;
    return resultData;
  }

  async getNewsInfo() {
    const juheDefaultEndpoint = this.configService.get<string>('juheDefaultEndpoint');
    const juheNewsKey = this.configService.get<string>('juheNewsKey');
    const res = await axios.get(`${juheDefaultEndpoint}/toutiao/index?key=${juheNewsKey}&type=guonei`);
    const resultData = res.data as NewsInfoResult;
    return resultData;
  }
}
