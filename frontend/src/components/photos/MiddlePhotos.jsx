import React from 'react';
import { MiddleImg, ContainerTop, ContainerBottom } from './styles';

const MiddlePhotos = (props) => {
  return (
    <React.Fragment>
      <ContainerTop
        className={'photo-container'}
        onClick={() => props.handleClick(props.photo1.id)}
      >
        <MiddleImg src={props.photo1.link} alt={'house'} />
      </ContainerTop>
      <ContainerBottom
        className={'photo-container'}
        onClick={() => props.handleClick(props.photo2.id)}
      >
        <MiddleImg src={props.photo2.link} alt={'house'} />
      </ContainerBottom>
    </React.Fragment>
  );
};

export default MiddlePhotos;
