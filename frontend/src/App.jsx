import React, { useEffect } from 'react';
import Modal from './components/modal/Modal';
import Photos from './components/photos/Photos';
import UseWindowSize from './helpers/UseWindowSize';
import MobileModal from './components/modal/mobile/MobileModal';
import ShareModal from './components/modal/share/ShareModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  handleGetPhotos,
} from './redux/slices/photos/PhotoSlice';
import { getModalState } from './redux/slices/modal/modalSlice';

const App = () => {
  const dispatch = useDispatch();
  const { width, height } = UseWindowSize();
  const { current, allPhotos } = useSelector(getPhotoState);
  const { showShareModal } = useSelector(getModalState);

  useEffect(() => {
    dispatch(handleGetPhotos());
  }, []);

  return (
    current && (
      <React.Fragment>
        {width > 1127 ? (
          <Modal height={height} />
        ) : (
          <MobileModal width={width} />
        )}
        {width > 743 && showShareModal && <ShareModal />}
        <Photos photos={allPhotos} width={width} />
      </React.Fragment>
    )
  );
};

export default App;
