import React from 'react';
import AllPhotos from './AllPhotos';
import MainPhoto from './MainPhoto';
import TitleGrid from '../title/TitleGrid';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/slices/modal/modalSlice';
import { handleFindCurrent } from '../../redux/slices/photos/PhotoSlice';

const Photos = (props) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(setShowModal(true));
    dispatch(handleFindCurrent(props.photos, id));
  };

  return (
    <React.Fragment>
      {props.width > 743 ? (
        <React.Fragment>
          <TitleGrid width={props.width} />
          <AllPhotos
            photos={props.photos}
            width={props.width}
            handleClick={handleClick}
          />
        </React.Fragment>
      ) : (
        <MainPhoto photo={props.photos[0]} handleClick={handleClick} />
      )}
      ;
    </React.Fragment>
  );
};

export default Photos;
