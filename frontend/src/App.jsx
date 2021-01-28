import React, { useEffect } from 'react';
import Modal from './components/modal/Modal';
import Photos from './components/photos/Photos';
import MobileModal from './components/modal/mobile/MobileModal';
import ShareModal from './components/modal/share/ShareModal';
import { useDispatch, useSelector } from 'react-redux';
import {
    getPhotoState,
    handleGetServiceData,
} from './redux/slices/photos/PhotoSlice';

const App = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const { current, allPhotos } = useSelector(getPhotoState);
    const { id } = params;

    useEffect(() => {
        dispatch(handleGetServiceData(id));
    }, []);

    return (
        current && (
            <React.Fragment>
                <ShareModal />
                <Modal />
                <MobileModal />
                <Photos photos={allPhotos} />
            </React.Fragment>
        )
    );
};

export default App;
