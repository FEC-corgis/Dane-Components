const { rest } = require('msw');
const { mockHostedbyData, mockReviewsData } = require('../mockData/backend');

module.exports.handlers = [
    rest.get(
        'http://localhost:5002/api/hostedbyService/superhost/1',
        (_req, res, ctx) => {
            return res(ctx.json(mockHostedbyData));
        }
    ),
    rest.get('http://localhost:1984/reviews/header/1', (_req, res, ctx) => {
        return res(ctx.json(mockReviewsData));
    }),
];
