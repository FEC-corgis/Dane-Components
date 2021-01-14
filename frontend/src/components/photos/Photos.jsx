import React from 'react';
import AllPhotos from './AllPhotos';
import MainPhoto from './MainPhoto';
import UseWindowSize from '../../helpers/UseWindowSize';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/slices/modal/modalSlice';

const Photos = (props) => {
  const dispatch = useDispatch();
  const { width } = UseWindowSize();

  const handleClick = () => {
    dispatch(setShowModal(true));
  };

  return width > 743 ? (
    <AllPhotos photos={props.photos} width={width} handleClick={handleClick} />
  ) : (
    <MainPhoto link={props.photos[0].link} handleClick={handleClick} />
  );
};

export default Photos;
