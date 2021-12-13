import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import request from './server/index';
import { Profile } from '../models/Profile';
import { dropCollections, closeConnections } from './util';

describe('Simulator endpoints /simulator', () => {
  let profile;
  beforeAll(async () => {
    profile = await Profile.create({
      name: `Henry`,
      email: `henry@gmail.com`,
      nickname: `igwe`,
      capital: `123`,
      divisa: `String`,
      prefered_cryptocurrency: `String`,
    });
  }, 10000);

  afterAll(async () => {
    await dropCollections();
    await closeConnections();
  });

  it('should create a simulator', async () => {
    const res = await request.post(`/api/simulator/${profile._id}`).send({
      price: '3000',
      cryptocurrency: 'Ethereum',
      dateRecorded: '2021-01-06',
      euros: 250,
      quantity: 10,
    });
    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty('_id');
    expect(res.body.data).toHaveProperty('price', 3000);
  }, 10000);

  it('should get a simulator', async () => {
    const res = await request.get(`/api/simulator/${profile._id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('_id');
    expect(res.body.data).toHaveProperty('profile_id', `${profile._id}`);
  }, 10000);

  it('should return a 404 not found error', async () => {
    const res = await request.get(`/api/simulator/6093abb3dfd9da1deeae56f2`);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('success', false);
  }, 10000);

  it('should get all simulator', async () => {
    const res = await request.get(`/api/simulator`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveLength(1);
  }, 10000);
});
