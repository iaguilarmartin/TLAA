import request from 'supertest';
import App from '../app';
import CoinsRoute from '../routes/coins.route';
import { isNumber } from 'class-validator';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing coins', () => {
  describe('[GET] /coins?total=22.20', () => {
    const coinsRoute = new CoinsRoute();
    const app = new App([coinsRoute]);
    it('it returns an object with total and coins properties', async () => {
      const res = await request(app.getServer()).get(`${coinsRoute.path}?total=22.20`);
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(isNumber(res.body.total)).toBeTruthy();
      expect(res.body.coins).toBeInstanceOf(Object);
      expect(res.body.total).toEqual(22.2);
    });

    it('it returns the correct schema for the coins property', async () => {
      const res = await request(app.getServer()).get(`${coinsRoute.path}?total=22.20`);
      expect(res.status).toBe(200);
      expect(Object.keys(res.body.coins).length).toEqual(2);
      expect(res.body.coins.foos).toBeInstanceOf(Object);
      expect(Object.keys(res.body.coins.bars)).toEqual(['1', '2']);
      expect(res.body.coins.bars).toBeInstanceOf(Object);
      expect(Object.keys(res.body.coins.foos)).toEqual(['1', '5', '10', '20', '50']);
    });

    it('it returns the minimum number of coins for a total', async () => {
      const res = await request(app.getServer()).get(`${coinsRoute.path}?total=22.20`);
      expect(res.status).toBe(200);
      expect(res.body.coins.bars).toBeInstanceOf(Object);
      expect(res.body.coins.foos).toBeInstanceOf(Object);

      // Check correct values are present
      expect(res.body.coins.bars['2']).toEqual(11);
      expect(res.body.coins.foos['20']).toEqual(1);
      // Check 0 values are returned for unused denominations
      expect(res.body.coins.bars['1']).toEqual(0);
      expect(res.body.coins.foos['1']).toEqual(0);
      expect(res.body.coins.foos['5']).toEqual(0);
      expect(res.body.coins.foos['10']).toEqual(0);
      expect(res.body.coins.foos['50']).toEqual(0);
    });

    it('it returns the minimum number of coins for a total', async () => {
      const res = await request(app.getServer()).get(`${coinsRoute.path}?total=23.20`);
      expect(res.status).toBe(200);
      expect(res.body.coins.bars).toBeInstanceOf(Object);
      expect(res.body.coins.foos).toBeInstanceOf(Object);

      // Check correct values are present
      expect(res.body.coins.bars['2']).toEqual(11);
      expect(res.body.coins.foos['20']).toEqual(1);
      expect(res.body.coins.bars['1']).toEqual(1);
      // Check 0 values are returned for unused denominations
      expect(res.body.coins.foos['1']).toEqual(0);
      expect(res.body.coins.foos['5']).toEqual(0);
      expect(res.body.coins.foos['10']).toEqual(0);
      expect(res.body.coins.foos['50']).toEqual(0);
    });
  });
});
