import React from 'react';
import { LeftContainer, LeftImg } from './styles';

const LeftPhoto = (props) => {
  return (
    <LeftContainer>
      <LeftImg src={props.link} alt={'house'} />
    </LeftContainer>
  );
};

export default LeftPhoto;
