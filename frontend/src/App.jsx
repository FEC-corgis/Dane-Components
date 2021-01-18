import React from 'react';
import PhotoContainer from './components/photos/PhotoContainer';
import ModalContainer from './components/modal/ModalContainer';

const App = () => {
  return (
    <div>
      <ModalContainer />
      <PhotoContainer />
    </div>
  );
};

export default App;
