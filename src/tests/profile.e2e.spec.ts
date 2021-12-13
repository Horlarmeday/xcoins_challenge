import { afterAll, describe, expect, it } from '@jest/globals';
import request from './server/index';
import { dropCollections, closeConnections } from './util';

describe('Profile endpoints /simulator', () => {
  let profile_id;
  afterAll(async () => {
    await dropCollections();
    await closeConnections();
  });

  it('should create a user profile', async () => {
    const res = await request.post(`/api/profile`).send({
      name: 'Nathaniel',
      nickname: 'nathan',
      email: 'nathaniel@gmail.com',
    });
    profile_id = res.body.data._id;
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('_id');
    expect(res.body.data).toHaveProperty('nickname', 'nathan');
  }, 10000);

  it('should not create a new profile but return existing profile', async () => {
    const res = await request.post(`/api/profile`).send({
      name: 'Nathaniel',
      nickname: 'nathan',
      email: 'nathaniel@gmail.com',
    });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data._id).toEqual(profile_id);
  }, 10000);

  it('should get all profiles', async () => {
    const res = await request.get(`/api/profile`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveLength(1);
  }, 10000);
});
