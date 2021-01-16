import React, { useEffect } from 'react';
import PhotoContainer from './components/photos/PhotoContainer';
import Modal from './components/modal/MobileModal';
import MobileModal from './components/modal/mobile/MobileContainer';
import { useDispatch } from 'react-redux';
import { handleGetPhotos } from './redux/slices/photos/PhotoSlice';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetPhotos());
  }, []);
  return (
    <div>
      {/* <Modal /> */}
      <MobileModal />
      {/* <PhotoContainer /> */}
    </div>
  );
};

export default App;
