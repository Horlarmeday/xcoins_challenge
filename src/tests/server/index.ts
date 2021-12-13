import request from 'supertest';
import server from '../../core/startup/server';

export default request(server);
