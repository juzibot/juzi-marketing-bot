import { Inject, Injectable } from '@nestjs/common';
import { JuheGatewayService } from 'src/gateway/juhe-gateway.service';

@Injectable()
export class JokeService {
  @Inject()
  private readonly juheGatewayService: JuheGatewayService;

  async getJokeMessage () {
    const result = await this.juheGatewayService.getJokeInfo();
    return result.result.data.map(r => r.content);
  }
}
