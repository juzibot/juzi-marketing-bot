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
  }
}
