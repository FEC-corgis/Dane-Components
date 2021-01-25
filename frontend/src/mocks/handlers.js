import { rest } from 'msw';
import mockData from './data';

export const handlers = [
    rest.get('http://localhost:5000/api/photos/1', (_req, res, ctx) => {
        return res(ctx.json(mockData));
    }),
];
