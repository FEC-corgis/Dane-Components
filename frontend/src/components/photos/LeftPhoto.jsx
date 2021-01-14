import React from 'react';
import { LeftContainer, LeftImg } from './styles';

const LeftPhoto = (props) => {
  return (
    <LeftContainer onClick={props.handleClick}>
      <LeftImg src={props.link} alt={'house'} />
    </LeftContainer>
  );
};

export default LeftPhoto;
