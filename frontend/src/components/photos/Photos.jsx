import React from 'react';
import AllPhotos from './AllPhotos';
import MainPhoto from './MainPhoto';
import UseWindowSize from '../../helpers/UseWindowSize';

const Photos = (props) => {
  const { width } = UseWindowSize();

  return width > 743 ? (
    <AllPhotos photos={props.photos} width={width} />
  ) : (
    <MainPhoto link={props.photos[0].link} />
  );
};

export default Photos;
