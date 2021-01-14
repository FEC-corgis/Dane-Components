import React from 'react';
import { LeftContainer, LeftImg } from './styles';

const MainPhoto = (props) => {
  return (
    <LeftContainer>
      <LeftImg src={props.link} alt={'house'} />
    </LeftContainer>
  );
};

export default MainPhoto;
