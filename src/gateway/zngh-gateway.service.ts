import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { GasInfoResult } from './interface/gas.interface';

@Injectable()
export class ZnghGatewayService {
  @Inject()
  private readonly configService: ConfigService;

  async getGasStationInfo (stationId: string) {
    const znghEndpoint = this.configService.get<string>('znghEndpoint');
    const url = `${znghEndpoint}/juzi/v1/oil/station_info?stationId=${stationId}`
    try {
      const result = await axios.get(url);
      return result.data as GasInfoResult;
    } catch (e) {
      console.error(e)
    }
  }  
}
