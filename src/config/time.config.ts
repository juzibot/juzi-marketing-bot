export interface TimeConfig {
  morningReport: string,
  newsMessage: string,
  jokeMessage: string,
}

export const timeConfig: TimeConfig = {
  // 早报定时发送时间
  morningReport: '08:00',
  // 新闻定时发送时间
  newsMessage: '09:00',
  // 开心一刻发送时间
  jokeMessage: '16:00',
};
