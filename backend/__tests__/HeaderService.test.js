const app = require('../server');
const request = require('supertest');

test('should query the photos of the property with ID 1', async () => {
    const res = await request(app).get('/api/headerService/1');

    expect(res.status).toEqual(200);
    expect(res.body.photos[0].Property.id).toEqual(1);
    expect(res.body.photos.length).toEqual(10);
});

test('should query the photos of the property with ID 80', async () => {
    const res = await request(app).get('/api/headerService/80');

    expect(res.status).toEqual(200);
    expect(res.body.photos[0].Property.id).toEqual(80);
    expect(res.body.photos.length).toEqual(5);
});
