import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class MhGatewayService {
  @Inject()
  private readonly configService: ConfigService;

  private readonly logger = new Logger(MhGatewayService.name);

  async sendTextMessage(chatId: string, text: string) {
    const mhToken = this.configService.get<string>('mhToken');
    const mhEndpoint = this.configService.get<string>('mhEndpoint');
    await axios.post(`${mhEndpoint}/message/send`, {
      token: mhToken,
      chatId,
      messageType: 0,
      payload: { text },
    }).catch(e => {
      this.logger.error(e);
      throw e;
    });
  }
}
