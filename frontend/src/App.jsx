import React, { useEffect } from 'react';
import Modal from './components/modal/Modal';
import Photos from './components/photos/Photos';
import UseWindowSize from './helpers/UseWindowSize';
import MobileModal from './components/modal/mobile/MobileModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  handleGetPhotos,
} from './redux/slices/photos/PhotoSlice';

const App = () => {
  const dispatch = useDispatch();
  const { width, height } = UseWindowSize();
  const { current, allPhotos } = useSelector(getPhotoState);

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
        <Photos photos={allPhotos} width={width} />
      </React.Fragment>
    )
  );
};

export default App;
