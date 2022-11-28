import { Inject, Injectable } from '@nestjs/common';
import { JuheGatewayService } from 'src/gateway/juhe-gateway.service';

const numberEmojiMap = {
  0: '1️⃣',
  1: '2️⃣',
  2: '3️⃣',
  3: '4️⃣',
  4: '5️⃣',
}

@Injectable()
export class NewsService {
  @Inject()
  private juheGatewayService: JuheGatewayService;

  async getNewsMessage () {
    const newsMessage = await this.juheGatewayService.getNewsInfo();
    return newsMessage.result.data.slice(0, 5).map((d, index) => `${numberEmojiMap[index]}${d.title}`).join('\n');
  }
}
