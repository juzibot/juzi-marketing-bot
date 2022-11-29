import { miniProgramConfig } from './mini-program.config';
import { roomConfigList } from './room.config';
import { timeConfig } from './time.config';

export default () => {
  return {
    /**
     * Base http server configs
     */
    port: parseInt(process.env.PORT, 10) || 3000,

    mhEndpoint: 'https://ex-api.botorange.com',
    mhToken: process.env.MH_TOKEN,

    juheDefaultEndpoint: 'http://v.juhe.cn',
    juheWeatherEndpoint: 'http://apis.juhe.cn',
    juheWeatherKey: process.env.JUHE_WEATHER_KEY,
    juheCalendarKey: process.env.JUHE_CALENDAR_KEY,
    juheNewsKey: process.env.JUHE_NEWS_KEY,
    juheJokeKey: process.env.JUHE_JOKE_KEY,

    apiSpaceEndpoint: 'https://eolink.o.apispace.com',
    apiSpaceKey: process.env.API_SPACE_KEY,

    znghEndpoint: 'https://api.znghne.com',

    roomConfigList,
    timeConfig,
    miniProgramConfig,
  }
}
