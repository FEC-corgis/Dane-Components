import React from 'react';
import { Img, Parent, ContainerTopRight, ContainerBottomRight } from './styles';

const EndPhotos = (props) => {
  return (
    <Parent>
      <ContainerTopRight>
        <Img src={props.photo1.link} alt={'house'} />
      </ContainerTopRight>
      <ContainerBottomRight>
        <Img src={props.photo2.link} alt={'house'} />
      </ContainerBottomRight>
    </Parent>
  );
};

export default EndPhotos;
