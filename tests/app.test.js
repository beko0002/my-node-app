// const request = require('supertest');
// const app = require('../src/app');

// describe('GET /', () => {
//   it('should respond with "Hello, World!"', async () => {
//     const response = await request(app).get('/');
//     expect(response.status).toBe(200);
//     expect(response.text).toBe('Hello, World!');
//   });
// });

const request = require('supertest');
const app = require('../src/app');

let server;
let port = process.env.PORT || 3500;

beforeAll(() => {
  // Start the server before the tests
  server = app.listen(port);
});

afterAll(() => {
  // Close the server after the tests
  server.close();
});

describe('GET /', () => {
  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});


