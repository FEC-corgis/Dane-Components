import React from 'react';
import axios from 'axios';
import PhotoContainer from './components/photos/PhotoContainer';

const App = () => {
  const handleClick = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <PhotoContainer />
    </div>
  );
};

export default App;
