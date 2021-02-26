import request from 'supertest';
import App from '../app';

import PeopleRoute from '../routes/people.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing People Controller', () => {
  describe('[Post] /people', () => {
    const peopleRoute = new PeopleRoute();
    const app = new App([peopleRoute]);

    it('it should greet Tom', async () => {
      const res = await request(app.getServer())
        .post(`${peopleRoute.path}`)
        .send({
          job: 'doctor',
          name: 'Tom',
          patients: ['Bob', 'Mohammed', 'Claire'],
        });
      expect(res.status).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.greeting).toEqual('Hi Tom!');
    });

    it("it should suggest treatments for Tom's patients", async () => {
      const res = await request(app.getServer())
        .post(`${peopleRoute.path}`)
        .send({
          job: 'doctor',
          name: 'Tom',
          patients: ['Bob', 'Mohammed', 'Claire'],
        });
      expect(res.status).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.patients).toBeInstanceOf(Array);

      expect(res.body.patients[0].patient).toEqual('Bob');
      expect(res.body.patients[0].treatment).toEqual('flu shot');

      expect(res.body.patients[1].patient).toEqual('Mohammed');
      expect(res.body.patients[1].treatment).toEqual('flu shot');

      expect(res.body.patients[2].patient).toEqual('Claire');
      expect(res.body.patients[2].treatment).toEqual('flu shot');
    });

    it('it should suggest different treatments for a vet', async () => {
      const res = await request(app.getServer())
        .post(`${peopleRoute.path}`)
        .send({
          job: 'Vet',
          name: 'Steve',
          patients: ['Pickles', 'Mr Bojangles'],
        });
      expect(res.status).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.patients).toBeInstanceOf(Array);

      expect(res.body.patients[0].patient).toEqual('Pickles');
      expect(res.body.patients[0].treatment).toEqual('shots and a chew toy');

      expect(res.body.patients[1].patient).toEqual('Mr Bojangles');
      expect(res.body.patients[1].treatment).toEqual('shots and a chew toy');
    });
  });
});
