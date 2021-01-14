import React from 'react';
import { MainContainer, MainImg } from './styles';

const MainPhoto = (props) => {
  return (
    <MainContainer>
      <MainImg src={props.link} alt={'house'} />
    </MainContainer>
  );
};

export default MainPhoto;
