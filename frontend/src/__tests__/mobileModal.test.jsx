import React from 'react';
import MobileModal from '../components/modal/mobile/MobileModal';
import ShareModal from '../components/modal/share/ShareModal';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { setCurrentPhoto, setPhotos } from '../redux/slices/photos/PhotoSlice';
import { setShowModal } from '../redux/slices/modal/modalSlice';

const photos = [
    {
        id: 1,
        link:
            'https://a0.muscache.com/im/pictures/2ea34253-a67b-42f4-a302-35e4b96da5ce.jpg?im_w=720',
        isMain: true,
        propertyId: 1,
        description: 'description1',
    },
    {
        id: 2,
        link:
            'https://a0.muscache.com/im/pictures/f3b01106-4f8a-4306-941a-bb210305582b.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description2',
    },
    {
        id: 3,
        link:
            'https://a0.muscache.com/im/pictures/5da444c3-8f7a-4be1-96f2-8f58e0301346.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description3',
    },
    {
        id: 4,
        link:
            'https://a0.muscache.com/im/pictures/d3ecc931-6dcd-4f32-834b-20aa70ab75dd.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description4',
    },
    {
        id: 5,
        link:
            'https://a0.muscache.com/im/pictures/3444b786-531e-4a20-b169-5ca1f9c479a6.jpg?im_w=720',
        isMain: false,
        propertyId: 1,
        description: 'description5',
    },
];

beforeEach(() => {
    store.dispatch(setPhotos(photos));
    store.dispatch(setCurrentPhoto({ current: photos[0], currentIndex: 0 }));
    store.dispatch(setShowModal(true));

    render(
        <Provider store={store}>
            <MobileModal />
            <ShareModal />
        </Provider>
    );
});

it('should show the share modal on click', () => {
    const shareBtn = screen.getByTestId('share');
    expect(screen.getByText('Facebook')).not.toBeVisible();

    fireEvent.click(shareBtn);
    expect(screen.getByText('Facebook')).toBeVisible();
});
