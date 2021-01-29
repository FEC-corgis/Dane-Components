import React from 'react';
import Details from '../../Details';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../../redux/store';
import { handleGetServiceData } from '../../../../../../redux/slices/photos/HeaderServiceSlice';

test('should render data dynamically', () => {
    store.dispatch(handleGetServiceData(85));
    render(
        <Provider store={store}>
            <Details />
        </Provider>
    );

    expect(
        screen.getByText('South Lake Tahoe, California, United States')
    ).toBeInTheDocument();
    expect(screen.getByText('Superhost')).toBeInTheDocument();
    expect(screen.getByText('4.52')).toBeInTheDocument();
});
