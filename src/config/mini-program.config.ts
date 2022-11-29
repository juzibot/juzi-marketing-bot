import { MiniProgramPayload } from 'src/gateway/interface/message-payload.interface';

export interface MiniProgramConfig {
  stationId: string,
  payload: MiniProgramPayload,
}

export const miniProgramConfig: MiniProgramConfig[] = [{
  stationId: '568572022072073090',
  payload: {
    appid: 'gh_037c70e93d4f',
    description: '加了个油',
    pagePath: 'pages/oilIndex/index.html?appKey=lrf7MjFrgaN9zPPU&stationId=568572022072073090',
    thumbUrl: 'https://image.aicwx.com/station/image/202207/19200145nCq.png',
    title: '聚源加油站',
    username: 'wx0058c76b7f3b09ae',
    iconUrl: 'https://xiaoju-resource-bucket.s3.cn-northwest-1.amazonaws.com.cn/6381c50e6e00e21fab3fbc21_640%3Fwx_fmt%3Dpng%26wxfrom%3D200',
  }
}]
