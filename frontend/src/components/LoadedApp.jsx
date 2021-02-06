import React from 'react';
import ShareModal from './modal/share/ShareModal';
import Modal from './modal/Modal';
import MobileModal from './modal/mobile/MobileModal';
import Photos from './photos/Photos';
import { useSelector } from 'react-redux';
import AppContainer from './styled-components/AppContainer';

const LoadingApp = () => {
    const { header, modal } = useSelector((state) => state);
    const { allPhotos } = header.photos;
    const { showModal, showShareModal } = modal;
    return (
        <AppContainer showModal={showModal} showShareModal={showShareModal}>
            <ShareModal />
            <Modal />
            <MobileModal />
            <Photos photos={allPhotos} />
        </AppContainer>
    );
};

export default LoadingApp;
