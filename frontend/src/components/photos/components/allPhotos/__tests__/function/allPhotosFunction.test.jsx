import React from 'react';
import AllPhotos from '../../AllPhotos';
import Modal from '../../../../../modal/Modal';
import mockData from '../../../../../../mocks/data';
import userEvent from '@testing-library/user-event';
import { store } from '../../../../../../redux/store';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import {
    setPhotos,
    setCurrentPhoto,
} from '../../../../../../redux/slices/photos/PhotoSlice';

test('clicking on any photo should activate the main modal', (done) => {
    store.dispatch(setPhotos(mockData));
    store.dispatch(setCurrentPhoto({ current: mockData[0], currentIndex: 0 }));

    const handleClick = jest.fn();
    render(
        <Provider store={store}>
            <AllPhotos photos={mockData} handleClick={handleClick} />
            <Modal />
        </Provider>
    );

    const image = screen.getByTestId('left-photo-container');

    userEvent.click(image);

    setTimeout(() => {
        expect(handleClick).toHaveBeenCalled();
        expect(screen.getByText('1 / 10')).toBeVisible();
        done();
    }, 500);
});
