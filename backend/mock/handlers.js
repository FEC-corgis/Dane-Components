const { rest } = require('msw');
const { mockData } = require('./mockData');

module.exports.handlers = [
    rest.get('/api/headerService/1', (_req, res, ctx) => {
        console.log('HANDLER REACHED');
        return res(ctx.json(mockData[0]));
    }),
    rest.get('/api/headerService/80', (_req, res, ctx) => {
        return res(ctx.json(mockData[1]));
    }),
];
