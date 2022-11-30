import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import { ApiSpaceGatewayService } from 'src/gateway/apispace-gateway.service';
import areaCode from '../config/areaCode.json';

@Injectable()
export class TrafficService {
  @Inject()
  private readonly apiSpaceGatewayService: ApiSpaceGatewayService;

  async getTrafficMessage (city: string) {
    const areaCode = this.getAreaCode(city);
    if (areaCode === null) {
      return `未获取到限行数据`;
    }
    const trafficInfo = await this.apiSpaceGatewayService.getTrafficInfo(areaCode);
    const date = moment().format('YYYY-MM-DD');
    const numbers = trafficInfo.result.traffic.limits.find(l => l.date === date)?.number || '';

    if (typeof numbers === 'undefined') {
      return '没有找到限行规则';
    }
    if (numbers === 'W') {
      return '今日尾号不限行';
    }
    if (numbers === 'S') {
      return '今日限行尾号：双号';
    }
    if (numbers === 'D') {
      return '今日限行尾号：单号';
    }
    if (!numbers) {
      return '';
    }
    return `今日限行尾号：${numbers.split('').join(' 和 ')}`;
  }

  private getAreaCode (city: string) {
    let shortName: string
    let longName: string
    if (city.includes('市')) {
      shortName = city.replace('市', '');
      longName = city;
    } else {
      shortName = city;
      longName = `${city}市`;
    }

    const exactMatch = areaCode.result.citylist.filter(c => c.city === shortName || c.city === longName);
    if (exactMatch.length) {
      return exactMatch[0].areacode;
    }
    const regexMatch = areaCode.result.citylist.filter(c => new RegExp(`(${longName}|${shortName})`).test(c.city))
    if (regexMatch.length) {
      return regexMatch[0].areacode;
    }
    return null;
  }
}
