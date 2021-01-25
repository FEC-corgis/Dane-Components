import React from 'react';
import AllPhotos from '../AllPhotos';
import data from '../../../../../mocks/data';
import { store } from '../../../../../redux/store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

test('should render first five images in data set', async () => {
    render(
        <Provider store={store}>
            <AllPhotos photos={data} />
        </Provider>
    );

    const images = await screen.findAllByRole('img', { name: 'house' });

    expect(data.length).toBe(10);
    expect(images).toHaveLength(5);
});
