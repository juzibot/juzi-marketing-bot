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
  }},{
    stationId: '229902022061845164',
    payload: {
      appid: 'gh_037c70e93d4f',
      description: '欢迎到站加油',
      pagePath: 'pages/oilIndex/index.html?appKey=CuyrlVPjx9FGVe6D&stationId=229902022061845164',
      thumbUrl: 'https://s3.cn-north-1.amazonaws.com.cn/xiaoju-material/public/e7e71569-cfd9-40cb-a90a-897fb6d18741_%E4%B8%AD%E5%9B%BA%E4%B8%9C%E4%B8%89%E7%8E%AF%E5%8A%A0%E6%B2%B9%E7%AB%99.jpeg',
      title: '中固东三环加油站',
      username: 'wx0058c76b7f3b09ae',
      iconUrl: 'https://xiaoju-resource-bucket.s3.cn-northwest-1.amazonaws.com.cn/6381c50e6e00e21fab3fbc21_640%3Fwx_fmt%3Dpng%26wxfrom%3D200',
    }
}]
