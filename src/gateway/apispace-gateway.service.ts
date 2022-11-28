import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { TrafficInfoResult } from './interface/traffic.interface';

@Injectable()
export class ApiSpaceGatewayService {
  @Inject()
  private readonly configService: ConfigService;

  async getTrafficInfo (areaCode: string) {
    const apiSpaceEndpoint = this.configService.get<string>('apiSpaceEndpoint');
    const apiSpaceKey = this.configService.get<string>('apiSpaceKey');
    const url = `${apiSpaceEndpoint}/5345645/lives_geo/v001/xianxing?days=15&areacode=${areaCode}`;
    const result = await axios.get(url, {
      headers: {
        'Authorization-Type': 'apikey',
        'X-APISpace-Token': apiSpaceKey,
      },
    });
    return result.data as TrafficInfoResult;
  }
}
