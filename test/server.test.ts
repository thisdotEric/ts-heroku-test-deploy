import request from 'supertest';
import app from '../src/server';

describe('/songs', () => {
  it('should return arrays of songs', async () => {
    const res = await request(app).get('/songs');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toStrictEqual([
      { name: 'Time will reveal', artist: 'DeBarge' },
    ]);
  });
});
