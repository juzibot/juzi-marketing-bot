interface Realtime {
  temperature: string,
    humidity: string,
    info: string,
    wid: string,
    direct: string,
    power: string,
    aqi: string,
}

interface Wid {
  day: string,
    night: string,
}

interface Future {
  date: string,
    temperature: string,
    weather: string,
    wid: Wid,
    direct: string,
}

interface Result {
  city: string,
    realtime: Realtime,
    future: Future[],
}

export interface WeatherInfoResult {
  reason: string,
    result: Result,
    error_code: number,
}

// 返回数据样例
// {
//   "reason": "查询成功!",
//   "result": {
//     "city": "北京",
//     "realtime": {
//       "temperature": "0",
//       "humidity": "20",
//       "info": "多云",
//       "wid": "01",
//       "direct": "北风",
//       "power": "6级",
//       "aqi": "121"
//     },
//     "future": [{
//       "date": "2022-11-28",
//       "temperature": "-5/13℃",
//       "weather": "多云",
//       "wid": {
//         "day": "01",
//         "night": "01"
//       },
//       "direct": "西北风"
//     }, {
//       "date": "2022-11-29",
//       "temperature": "-8/-4℃",
//       "weather": "多云转晴",
//       "wid": {
//         "day": "01",
//         "night": "00"
//       },
//       "direct": "西北风"
//     }, {
//       "date": "2022-11-30",
//       "temperature": "-9/-1℃",
//       "weather": "晴",
//       "wid": {
//         "day": "00",
//         "night": "00"
//       },
//       "direct": "西南风"
//     }, {
//       "date": "2022-12-01",
//       "temperature": "-7/2℃",
//       "weather": "晴",
//       "wid": {
//         "day": "00",
//         "night": "00"
//       },
//       "direct": "西风转西南风"
//     }, {
//       "date": "2022-12-02",
//       "temperature": "-7/2℃",
//       "weather": "晴",
//       "wid": {
//         "day": "00",
//         "night": "00"
//       },
//       "direct": "南风转北风"
//     }]
//   },
//   "error_code": 0
// }