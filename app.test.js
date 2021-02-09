const app = require('.');
const supertest = require('supertest');
const request = supertest(app);

test('Call the /youtube endpoint', async (done) => {
  const res = await request.get('/youtube');
  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello, Youtube');
  done();
});
