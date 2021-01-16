import React, { useEffect } from 'react';
import PhotoContainer from './components/photos/PhotoContainer';
import Modal from './components/modal/Modal';
import MobileModal from './components/modal/mobile/MobileContainer';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  handleGetPhotos,
} from './redux/slices/photos/PhotoSlice';

const App = () => {
  const dispatch = useDispatch();
  const { current } = useSelector(getPhotoState);

  useEffect(() => {
    dispatch(handleGetPhotos());
  }, []);
  return (
    current && (
      <div>
        {/* <Modal /> */}
        <MobileModal />
        {/* <PhotoContainer /> */}
      </div>
    )
  );
};

export default App;
