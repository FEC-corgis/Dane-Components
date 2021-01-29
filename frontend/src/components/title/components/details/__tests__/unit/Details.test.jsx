import React from 'react';
import Details from '../../Details';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../../redux/store';
import { handleGetServiceData } from '../../../../../../redux/slices/photos/HeaderServiceSlice';

test('should render data dynamically from the store', (done) => {
    store.dispatch(handleGetServiceData(1));
    render(
        <Provider store={store}>
            <Details />
        </Provider>
    );
    setTimeout(() => {
        expect(
            screen.getByText('South Lake Tahoe, California, United States')
        ).toBeInTheDocument();
        expect(screen.getByText('Superhost')).toBeInTheDocument();
        expect(screen.getByText('4.52')).toBeInTheDocument();
        done();
    }, 1500);
});
