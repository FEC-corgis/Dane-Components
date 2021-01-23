import React from 'react';
import ShareModal from '../components/modal/share/ShareModal';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { render } from '@testing-library/react';

let sandBox;

beforeEach(() => {
    sandBox = render(
        <Router>
            <Provider store={store}>
                <ShareModal />
            </Provider>
        </Router>
    );
});

it('should render to the page', () => {
    expect(sandBox.getByText('Facebook')).not.toBeNull();
    expect(sandBox.getByText('Twitter')).not.toBeNull();
    expect(sandBox.getByText('Copy Link')).not.toBeNull();
    expect(sandBox.getByText('Email')).not.toBeNull();
    expect(sandBox.getByText('SMS')).not.toBeNull();
    expect(sandBox.getByText('Messenger')).not.toBeNull();
    expect(sandBox.getByText('WhatsApp')).not.toBeNull();
    expect(
        sandBox.getByText('Share this place with friends and family')
    ).not.toBeNull();
});
