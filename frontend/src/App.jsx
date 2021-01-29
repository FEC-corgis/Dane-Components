import React, { useEffect } from 'react';
import Modal from './components/modal/Modal';
import Photos from './components/photos/Photos';
import MobileModal from './components/modal/mobile/MobileModal';
import ShareModal from './components/modal/share/ShareModal';
import { useDispatch, useSelector } from 'react-redux';
import {
    getHeaderState,
    handleGetServiceData,
} from './redux/slices/photos/HeaderServiceSlice';

const App = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const { current, allPhotos } = useSelector(getHeaderState);
    const { id } = params;

    useEffect(() => {
        dispatch(handleGetServiceData(id));
    }, [id, dispatch]);

    return (
        current && (
            <section>
                <ShareModal />
                <Modal />
                <MobileModal />
                <Photos photos={allPhotos} />
            </section>
        )
    );
};

export default App;
