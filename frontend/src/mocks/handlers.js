import { rest } from 'msw';
import { mockData } from './data';

export const handlers = [
    rest.get('/api/headerService/1', (_req, res, ctx) => {
        return res(ctx.json(mockData));
    }),
];
