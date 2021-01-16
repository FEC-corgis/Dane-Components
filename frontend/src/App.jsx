import React, { useEffect } from 'react';
import Photos from './components/photos/Photos';
import UseWindowSize from './helpers/UseWindowSize';
import Modal from './components/modal/Modal';
import MobileModal from './components/modal/mobile/MobileContainer';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  handleGetPhotos,
} from './redux/slices/photos/PhotoSlice';

const App = () => {
  const dispatch = useDispatch();
  const { width } = UseWindowSize();
  const { current, allPhotos } = useSelector(getPhotoState);

  useEffect(() => {
    dispatch(handleGetPhotos());
  }, []);
  return (
    current && (
      <React.Fragment>
        {width > 1127 ? <Modal /> : <MobileModal />}
        <Photos photos={allPhotos} />
      </React.Fragment>
    )
  );
};

export default App;
