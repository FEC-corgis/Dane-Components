import React from 'react';
import { EndImg, ContainerTopRight, ContainerBottomRight } from './styles';

const EndPhotos = (props) => {
  return (
    <React.Fragment>
      <ContainerTopRight onClick={() => props.handleClick(props.photo1.id)}>
        <EndImg src={props.photo1.link} alt={'house'} />
      </ContainerTopRight>
      <ContainerBottomRight onClick={() => props.handleClick(props.photo2.id)}>
        <EndImg src={props.photo2.link} alt={'house'} />
      </ContainerBottomRight>
    </React.Fragment>
  );
};

export default EndPhotos;
