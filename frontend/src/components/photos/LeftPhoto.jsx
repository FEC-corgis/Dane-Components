import React from 'react';
import { LeftContainer, LeftImg } from './styles';

const LeftPhoto = (props) => {
  return (
    <LeftContainer
      className={'photo-container'}
      onClick={() => props.handleClick(props.photo.id)}
    >
      <LeftImg src={props.photo.link} alt={'house'} />
    </LeftContainer>
  );
};

export default LeftPhoto;
