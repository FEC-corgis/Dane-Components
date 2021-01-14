import React from 'react';
import { Img, Parent, ContainerTop, ContainerBottom } from './styles';

const MiddlePhotos = (props) => {
  return (
    <Parent>
      <ContainerTop>
        <Img src={props.photo1.link} alt={'house'} />
      </ContainerTop>
      <ContainerBottom>
        <Img src={props.photo2.link} alt={'house'} />
      </ContainerBottom>
    </Parent>
  );
};

export default MiddlePhotos;
