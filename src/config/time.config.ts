export interface TimeConfig {
  morningReport: string,
  morningGasMessage: string,
  newsMessage: string,
  jokeMessage: string,
  afternoonGasMessage:string,
  messageInterval: number,
  roomInterval: number,
}

export const timeConfig: TimeConfig = {
  // 早报定时发送时间
  morningReport: '20:55',
  // 早上油价定时发送时间
  morningGasMessage: '20:57',
  // 新闻定时发送时间
  newsMessage: '21:00',
  // 开心一刻发送时间
  jokeMessage: '21:02',
  // 下午油价定时发送时间
  afternoonGasMessage: '21:05',
  // 发消息的消息之间的间隔，单位秒
  messageInterval: 0.5,
  // 发消息群之间的间隔，单位秒
  roomInterval: 1,
};
