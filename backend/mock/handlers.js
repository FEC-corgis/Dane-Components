const { rest } = require('msw');
const { mockData } = require('./mockData');

module.exports.handlers = [
    rest.get(
        'http://localhost:5002/api/hostedbyService/superhost/1',
        (_req, res, ctx) => {
            return res(ctx.json(mockData[2]));
        }
    ),
    rest.get('http://localhost:1984/reviews/header/1', (_req, res, ctx) => {
        return res(ctx.json(mockData[3]));
    }),
    rest.get('/api/headerService/80', (_req, res, ctx) => {
        return res(ctx.json(mockData[1]));
    }),
];
