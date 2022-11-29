import { Inject, Injectable } from '@nestjs/common';
import { JuheGatewayService } from 'src/gateway/juhe-gateway.service';
import moment from 'moment';

@Injectable()
export class DateService {
  @Inject()
  private readonly juheGatewayService: JuheGatewayService;

  async getDateMessage() {
    const today = moment();
    const calendarInfo = await this.juheGatewayService.getCalendarInfo(today.format('YYYY-M-D'));
    const calendarData = calendarInfo.result.data;

    return `\
☀️${today.format('YYYY年MM月DD日')} ${calendarData.weekday.replace('星期', '周')}
万年历农历 ${calendarData.lunar}
宜：${calendarData.suit}
忌：${calendarData.avoid}\
`
  }
}
