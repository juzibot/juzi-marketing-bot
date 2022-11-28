import { Inject, Injectable } from '@nestjs/common';
import NodeCache from 'node-cache';
import { getJokeMessage, getMorningMessage, getNewsMessage } from 'src/material';
import { DateService } from './date.service';
import { GasStationService } from './gas-station.service';
import { JokeService } from './joke.service';
import { NewsService } from './news.service';
import { TrafficService } from './traffic.service';
import { WeatherService } from './weather.service';

const dateTtl = 3600; // in seconds
const weatherTtl = 3600; // in seconds
const trafficTtl = 3600; // in seconds
const gasTtl = 3600; // in seconds
const newsTtl =3600; // in seconds
const jokeTtl = 3600; // in seconds

@Injectable()
export class MessageService {
  @Inject()
  private readonly dateService: DateService;

  @Inject()
  private readonly weatherService: WeatherService;

  @Inject()
  private readonly trafficService: TrafficService;

  @Inject()
  private readonly gasStationService: GasStationService;

  @Inject()
  private readonly newsService: NewsService;

  @Inject()
  private readonly jokeService: JokeService;

  private cache = new NodeCache();

  async getMorningReport(city: string, stationId: string) {
    const dateMessage = await this.getDateMessage();
    const weatherMessage = await this.getWeatherMessage(city);
    const trafficMessage = await this.getTrafficMessage(city);
    const gasStationMessage = await this.getGasStationMessage(stationId);

    return getMorningMessage(dateMessage, weatherMessage, trafficMessage, gasStationMessage);
  }

  async getNews() {
    const msg = await this.getNewsWithCache();
    return getNewsMessage(msg);
  }

  async getJoke() {
    const jokeList = await this.getJokeWithCache();
    const joke = jokeList[Math.floor(Math.random() * jokeList.length)];
    return getJokeMessage(joke);
  }

  private async getDateMessage () {
    const key = 'date';
    const cache = this.cache.get<string>(key);
    if (cache) {
      return cache;
    }
    const dateMessage = await this.dateService.getDateMessage();
    this.cache.set(key, dateMessage, dateTtl);
    return dateMessage;
  }

  private async getWeatherMessage (city: string) {
    const key = `weather-${city}`;
    const cache = this.cache.get<string>(key);
    if (cache) {
      return cache;
    }
    const weatherMessage = await this.weatherService.getWeatherMessage(city);
    this.cache.set(key, weatherMessage, weatherTtl);
    return weatherMessage;
  }

  private async getTrafficMessage (city: string) {
    const key = `traffic-${city}`;
    const cache = this.cache.get<string>(key);
    if (cache) {
      return cache;
    }
    const trafficMessage = await this.trafficService.getTrafficMessage(city);
    this.cache.set(key, trafficMessage, trafficTtl);
    return trafficMessage;
  }

  private async getGasStationMessage (stationId: string) {
    const key = `gas-${stationId}`;
    const cache = this.cache.get<string>(key);
    if (cache) {
      return cache;
    }
    const gasStationMessage = await this.gasStationService.getGasStationMessage(stationId);
    this.cache.set(key, gasStationMessage, gasTtl);
    return gasStationMessage;
  }

  private async getNewsWithCache() {
    const key = 'news'
    const cache = this.cache.get<string>(key);
    if (cache) {
      return cache;
    }
    const msg = await this.newsService.getNewsMessage();
    this.cache.set(key, msg, newsTtl)
    return msg;
  }

  private async getJokeWithCache() {
    const key = 'joke-list';
    const cache = this.cache.get<string[]>(key);
    if (cache) {
      return cache;
    }
    const msg = await this.jokeService.getJokeMessage();
    this.cache.set(key, msg, jokeTtl);
    return msg;
  }
}
