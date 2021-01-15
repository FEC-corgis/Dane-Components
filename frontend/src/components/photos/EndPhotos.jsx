import React from 'react';
import { EndImg, ContainerTopRight, ContainerBottomRight } from './styles';

const EndPhotos = (props) => {
  return (
    <React.Fragment>
      <ContainerTopRight>
        <EndImg src={props.photo1.link} alt={'house'} />
      </ContainerTopRight>
      <ContainerBottomRight>
        <EndImg src={props.photo2.link} alt={'house'} />
      </ContainerBottomRight>
    </React.Fragment>
  );
};

export default EndPhotos;
