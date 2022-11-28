import { Inject, Injectable } from '@nestjs/common';
import { ZnghGatewayService } from 'src/gateway/zngh-gateway.service';

@Injectable()
export class GasStationService {
  @Inject()
  private readonly znghGatewayService: ZnghGatewayService;

  async getGasStationMessage (stationId: string) {
    const gasStationInfo = await this.znghGatewayService.getGasStationInfo(stationId);
    if (gasStationInfo.data.length === 0) {
      return '今日暂无油价信息';
    }
    const stationName = gasStationInfo.data[0]['油站名称'];
    const gasPriceDataList = gasStationInfo.data.map(g => ({
      gasNumber: g['油号'],
      price: g['优惠价'],
    }))
    return `\
[${stationName}]今日油价
-----------------
${gasPriceDataList.map(d => `${this.getGasName(d.gasNumber)}：${d.price}`).join('\n')}`
  }

  private getGasName (gasNumber: string) {
    if (gasNumber === '0') {
      return '0号柴油';
    } else {
      return `${gasNumber}号汽油`;
    }
  }
}
