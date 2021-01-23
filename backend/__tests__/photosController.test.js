const app = require('../server');
const request = require('supertest');

test('should query the photos of the property with ID 1', async () => {
    const res = await request(app).get('/api/photos/1');

    expect(res.status).toEqual(200);
    expect(res.body[0].PropertyId).toEqual(1);
    expect(res.body.length).toEqual(10);
});

test('should query the photos of the property with ID 80', async () => {
    const res = await request(app).get('/api/photos/80');

    expect(res.status).toEqual(200);
    expect(res.body[0].PropertyId).toEqual(80);
    expect(res.body.length).toEqual(5);
});
