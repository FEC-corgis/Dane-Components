import React from 'react';
import Title from '../../Title';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../../redux/store';
import { setPhotos } from '../../../../../../redux/slices/photos/PhotoSlice';
import mockData from '../../../../../../mocks/data';

test('should get title of current property from store and render to screen', () => {
    store.dispatch(setPhotos(mockData));

    render(
        <Provider store={store}>
            <Title />
        </Provider>
    );

    expect(
        screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing')
    ).toBeInTheDocument();
});
