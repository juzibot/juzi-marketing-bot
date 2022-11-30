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
      discountPrice: g['优惠价'],
      stationPrice: g['油站价'],
      globalPrice: g['国标价'],
    }));
    const discountPriceList = gasPriceDataList.filter(g => g.discountPrice < g.stationPrice);

    return `\
[${stationName}]加油站今日油价
-----------------
🇨🇳油站挂牌价 ：
${gasPriceDataList.map(d => `${this.getGasName(d.gasNumber)}${d.stationPrice}元/升`).join('\n')}\
${discountPriceList.length > 0 ? `

🅰️小程序加油价：
${discountPriceList.map(d => `${this.getGasName(d.gasNumber)}直降${Number(d.stationPrice - d.discountPrice).toFixed(2)}元/升，${d.discountPrice}元/升`).join('\n')}\
` : ''}
-----------------
💕点击下方小程序一键导航油站，享限时优惠价`
  }

  private getGasName (gasNumber: string) {
    if (gasNumber === '0') {
      return '0# 柴油';
    } else {
      return `${gasNumber}# 汽油`;
    }
  }
}
