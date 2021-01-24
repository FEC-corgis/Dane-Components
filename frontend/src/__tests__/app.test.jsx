import React from 'react';
import ShareModal from '../components/modal/share/ShareModal';
import Modal from '../components/modal/Modal';
import MobileModal from '../components/modal/mobile/MobileModal';
import Photos from '../components/photos/Photos';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { setCurrentPhoto, setPhotos } from '../redux/slices/photos/PhotoSlice';
import { BrowserRouter as Router } from 'react-router-dom';

const photos = [
    {
        id: 1,
        link:
            'https://a0.muscache.com/im/pictures/2ea34253-a67b-42f4-a302-35e4b96da5ce.jpg?im_w=720',
        isMain: true,
        propertyId: 1,
        description: 'description1',
        Property: {
            id: 1,
            title: 'here is a title',
            hostId: 1,
        },
    },
    {
        id: 2,
        link:
            'https://a0.muscache.com/im/pictures/f3b01106-4f8a-4306-941a-bb210305582b.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description2',
        Property: {
            id: 1,
            title: 'here is a title',
            hostId: 1,
        },
    },
    {
        id: 3,
        link:
            'https://a0.muscache.com/im/pictures/5da444c3-8f7a-4be1-96f2-8f58e0301346.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description3',
        Property: {
            id: 1,
            title: 'here is a title',
            hostId: 1,
        },
    },
    {
        id: 4,
        link:
            'https://a0.muscache.com/im/pictures/d3ecc931-6dcd-4f32-834b-20aa70ab75dd.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description4',
        Property: {
            id: 1,
            title: 'here is a title',
            hostId: 1,
        },
    },
    {
        id: 5,
        link:
            'https://a0.muscache.com/im/pictures/3444b786-531e-4a20-b169-5ca1f9c479a6.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description5',
        Property: {
            id: 1,
            title: 'here is a title',
            hostId: 1,
        },
    },
];

beforeEach(() => {
    store.dispatch(setPhotos(photos));
    store.dispatch(setCurrentPhoto({ current: photos[0], currentIndex: 0 }));

    render(
        <Router>
            <Provider store={store}>
                <ShareModal />
                <Modal />
                <MobileModal />
                <Photos photos={photos} />
            </Provider>
        </Router>
    );
});

it('should show five images on the screen', () => {
    const endImg1 = screen.getByTestId('end-img1');
    const endImg2 = screen.getByTestId('end-img2');
    const middleTop = screen.getByTestId('middle-top');
    const middleBottom = screen.getByTestId('middle-bottom');
    const leftImg = screen.getByTestId('left-img');
    expect(endImg1).toBeInTheDocument();
    expect(endImg2).toBeInTheDocument();
    expect(middleTop).toBeInTheDocument();
    expect(middleBottom).toBeInTheDocument();
    expect(leftImg).toBeInTheDocument();
});

test('a photo should display the main modal when clicked', () => {
    const leftImg = screen.getByTestId('left-img');
    fireEvent.click(leftImg);

    setTimeout(() => {
        expect(screen.getByText('description1')).toBeVisible();
    }, 1000);
});

test('"save" button should turn to "saved" when clicked', () => {
    expect(screen.getByText('Save')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Saved')).toBeInTheDocument();
});

test('share button should open the share modal', () => {
    fireEvent.click(screen.getByText('Share'));

    expect(screen.getByText('Facebook')).not.toBeNull();
    expect(screen.getByText('Twitter')).not.toBeNull();
    expect(screen.getByText('Copy Link')).not.toBeNull();
    expect(screen.getByText('Email')).not.toBeNull();
    expect(screen.getByText('SMS')).not.toBeNull();
    expect(screen.getByText('Messenger')).not.toBeNull();
    expect(screen.getByText('WhatsApp')).not.toBeNull();
    expect(
        screen.getByText('Share this place with friends and family')
    ).not.toBeNull();
});

test('"Show all photos" button should open the main modal and display first photo', () => {
    fireEvent.click(screen.getByText('Show all photos'));
    setTimeout(() => {
        expect(screen.getByText('description1')).toBeVisible();
        expect(screen.getByTestId('left')).not.toBeVisible();
        expect(screen.getByTestId('right')).toBeVisible();
    }, 1000);
});
