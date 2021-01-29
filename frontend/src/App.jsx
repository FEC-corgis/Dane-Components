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
    const { header } = useSelector(getHeaderState);
    console.log(header);
    // const { current, allPhotos } = header.photos;
    const { id } = params;

    useEffect(() => {
        console.log(id);
        dispatch(handleGetServiceData(id));
    }, [id, dispatch]);

    return (
        header &&
        header.current && (
            <section>
                <ShareModal />
                <Modal />
                <MobileModal />
                <Photos photos={header.allPhotos} />
            </section>
        )
    );
};

export default App;
