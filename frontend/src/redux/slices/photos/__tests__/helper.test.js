import { getServiceData } from '../helpers';

test('should return array of photos', async () => {
    const { photos } = await getServiceData(1);

    expect(photos).toHaveLength(10);
    expect(photos[0].PropertyId).toBe(1);
});
