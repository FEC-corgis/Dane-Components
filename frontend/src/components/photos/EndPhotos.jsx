import React from 'react';
import {
  Img,
  EndParent,
  ContainerTopRight,
  ContainerBottomRight,
} from './styles';

const EndPhotos = (props) => {
  return (
    <EndParent>
      <ContainerTopRight>
        <Img src={props.photo1.link} alt={'house'} />
      </ContainerTopRight>
      <ContainerBottomRight>
        <Img src={props.photo2.link} alt={'house'} />
      </ContainerBottomRight>
    </EndParent>
  );
};

export default EndPhotos;
