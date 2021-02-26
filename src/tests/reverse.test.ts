import request from 'supertest';
import App from '../app';
import ReverseRoute from '../routes/reverse.route';
import { isNumber } from 'class-validator';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Reverse', () => {
  describe('[GET] /reverse', () => {
    const reverseRoute = new ReverseRoute();
    const app = new App([reverseRoute]);

    it('it returns simple ASCII strings reverse', async () => {
      const res = await request(app.getServer()).get(`${reverseRoute.path}?input=foobar`);

      expect(res.status).toEqual(200);
      expect(res.body.reversed).toMatch(/raboof/i);
    });

    it('it returns reversed two-byte UTF-8 strings', async () => {
      const res = await request(app.getServer()).get(`${reverseRoute.path}?input=éöÿ`);

      expect(res.status).toEqual(200);
      expect(res.body.reversed).toMatch(/ÿöé/i);
    });

    it('it returns reversed integers', async () => {
      const res = await request(app.getServer()).get(`${reverseRoute.path}?input=309834`);

      expect(res.status).toEqual(200);
      expect(isNumber(res.body.reversed)).toBeTruthy();
      expect(res.body.reversed).toEqual(438903);
    });

    it('it returns reversed floats', async () => {
      const res = await request(app.getServer()).get(`${reverseRoute.path}?input=34.09`);

      expect(res.status).toEqual(200);
      expect(isNumber(res.body.reversed)).toBeTruthy();
      expect(res.body.reversed).toEqual(90.43);
    });
  });
});
