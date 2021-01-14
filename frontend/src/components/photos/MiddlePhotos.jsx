import React from 'react';
import { MiddleImg, ContainerTop, ContainerBottom } from './styles';

const MiddlePhotos = (props) => {
  return (
    <React.Fragment>
      <ContainerTop>
        <MiddleImg src={props.photo1.link} alt={'house'} />
      </ContainerTop>
      <ContainerBottom>
        <MiddleImg src={props.photo2.link} alt={'house'} />
      </ContainerBottom>
    </React.Fragment>
  );
};

export default MiddlePhotos;
