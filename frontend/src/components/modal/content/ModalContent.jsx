import React from 'react';
import ModalNav from '../nav/ModalNav';
import CurrentPhoto from '../photo/CurrentPhoto';
import DirectionButtons from '../directionButtons/DirectionButtons';

const Normal = (props) => (
  <React.Fragment>
    <ModalNav
      count={props.photos.currentIndex + 1}
      total={props.photos.allPhotos.length}
      height={props.height}
    />
    <CurrentPhoto
      photos={props.photos.allPhotos}
      current={props.photos.current}
      height={props.height}
    />
    <DirectionButtons
      photos={props.photos.allPhotos}
      current={props.photos.current}
      index={props.photos.currentIndex}
    />
  </React.Fragment>
);

export default Normal;
