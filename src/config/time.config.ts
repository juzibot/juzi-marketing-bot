export interface TimeConfig {
  morningReport: string,
  morningGasMessage: string,
  newsMessage: string,
  jokeMessage: string,
  afternoonGasMessage:string,
}

export const timeConfig: TimeConfig = {
  // 早报定时发送时间
  morningReport: '07:30',
  // 早上油价定时发送时间
  morningGasMessage: '08:00',
  // 新闻定时发送时间
  newsMessage: '09:00',
  // 开心一刻发送时间
  jokeMessage: '15:00',
  // 下午油价定时发送时间
  afternoonGasMessage: '17:00',
};
