import React from 'react';
import AllPhotos from '../../AllPhotos';
import { mockData } from '../../../../../../mocks/data';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../../../redux/store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import {
    setPhotos,
    setCurrentPhoto,
} from '../../../../../../redux/slices/photos/PhotoSlice';

test('clicking on any photo should activate the main modal, photo 1', async () => {
    store.dispatch(setPhotos(mockData.photos));
    store.dispatch(
        setCurrentPhoto({ current: mockData.photos[0], currentIndex: 0 })
    );

    const handleClick = jest.fn();
    render(
        <Provider store={store}>
            <AllPhotos photos={mockData.photos} handleClick={handleClick} />
        </Provider>
    );

    const image = screen.getByTestId('left-photo-container');

    userEvent.click(image);

    expect(handleClick).toHaveBeenCalled();
});
