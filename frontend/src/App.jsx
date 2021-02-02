import React, { useEffect } from 'react';
import Modal from './components/modal/Modal';
import Photos from './components/photos/Photos';
import LoadingPhotos from './components/photos/components/allPhotos/LoadingPhotos';
import MobileModal from './components/modal/mobile/MobileModal';
import ShareModal from './components/modal/share/ShareModal';
import { useDispatch, useSelector } from 'react-redux';
import {
    getHeaderState,
    handleGetServiceData,
} from './redux/slices/photos/HeaderServiceSlice';

const App = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const { loading, photos } = useSelector(getHeaderState);
    const { allPhotos } = photos;
    const { id } = params;

    useEffect(() => {
        dispatch(handleGetServiceData(id));
    }, [id, dispatch]);

    return (
        <section>
            {loading ? (
                <LoadingPhotos />
            ) : (
                <React.Fragment>
                    <ShareModal />
                    <Modal />
                    <MobileModal />
                    <Photos photos={allPhotos} />
                </React.Fragment>
            )}
        </section>
    );
};

export default App;
