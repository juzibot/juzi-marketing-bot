import { Inject, Injectable } from '@nestjs/common';
import { JuheGatewayService } from 'src/gateway/juhe-gateway.service';

@Injectable()
export class WeatherService {
  @Inject()
  private readonly juheGatewayService: JuheGatewayService;

  async getWeatherMessage (city: string) {
    const weatherInfo = await this.juheGatewayService.getWeatherInfo(city);
    const weatherData = weatherInfo.result.realtime;
    return `\
今天天气：${weatherData.info}，${weatherData.temperature}℃，湿度：${weatherData.humidity}
${weatherData.direct} ${weatherData.power}，空气质量指数：${weatherData.aqi}`
// 今天白天：阴天，有分散性阵雨，23℃ ~30℃
// 今晚到21日：阴有阵雨，22℃~32℃
  }
}
