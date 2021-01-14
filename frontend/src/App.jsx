import React from 'react';
import PhotoContainer from './components/photos/PhotoContainer';
import ModalContainer from './components/modal/ModalContainer';

const App = () => {
  return (
    <div style={{ marginTop: '66px' }}>
      <ModalContainer />
      <PhotoContainer />
    </div>
  );
};

export default App;
