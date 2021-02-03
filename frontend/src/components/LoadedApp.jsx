import React from 'react';
import ShareModal from './modal/share/ShareModal';
import Modal from './modal/Modal';
import MobileModal from './modal/mobile/MobileModal';
import Photos from './photos/Photos';
import { useSelector } from 'react-redux';
import { getPhotoState } from '../redux/slices/photos/HeaderServiceSlice';

const LoadingApp = () => {
    const { allPhotos } = useSelector(getPhotoState);
    return (
        <section>
            <ShareModal />
            <Modal />
            <MobileModal />
            <Photos photos={allPhotos} />
        </section>
    );
};

export default LoadingApp;
