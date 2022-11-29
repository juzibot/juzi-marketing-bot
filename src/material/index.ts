export const getMorningMessage = (
  // 日期话术模块
  dateMessage: string,
  // 天气话术模块
  weatherMessage: string,
  // 尾号限行话术模块
  trafficMessage: string,
) => `\
${dateMessage}
车友们早安，今天的生活来了~
----------------
${weatherMessage}
-----------------
${trafficMessage}
`;

export const getGasInfoMessage = (
  // 油价话术模块
  gasStationMessage: string,
) => `\
${gasStationMessage}
`

export const getNewsMessage = (
  newsMessage: string,
) => `\
📰每天几分钟，早知天下事
今天的早间新闻来了~
-----------------
${newsMessage}
`;

export const getJokeMessage = (
  jokeMessage: string,
) => `\
🚗车友们下午好~
😊今天的开心一刻来啦！
-------------------------
${jokeMessage}
`;
