import React from 'react';
import AllPhotos from './AllPhotos';
import MainPhoto from './MainPhoto';
import UseWindowSize from '../../helpers/UseWindowSize';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/slices/modal/modalSlice';
import { handleFindCurrent } from '../../redux/slices/photos/PhotoSlice';

const Photos = (props) => {
  const dispatch = useDispatch();
  const { width } = UseWindowSize();

  const handleClick = (id) => {
    dispatch(setShowModal(true));
    dispatch(handleFindCurrent(props.photos, id));
  };

  return width > 743 ? (
    <AllPhotos photos={props.photos} width={width} handleClick={handleClick} />
  ) : (
    <MainPhoto photo={props.photos[0]} handleClick={handleClick} />
  );
};

export default Photos;
