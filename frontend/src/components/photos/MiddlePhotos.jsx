import React from 'react';
import {
  MiddleImg,
  MiddleParent,
  ContainerTop,
  ContainerBottom,
} from './styles';

const MiddlePhotos = (props) => {
  return (
    <MiddleParent>
      <ContainerTop>
        <MiddleImg src={props.photo1.link} alt={'house'} />
      </ContainerTop>
      <ContainerBottom>
        <MiddleImg src={props.photo2.link} alt={'house'} />
      </ContainerBottom>
    </MiddleParent>
  );
};

export default MiddlePhotos;
