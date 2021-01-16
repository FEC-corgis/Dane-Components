import React /*, { useEffect }*/ from 'react';
import Photos from './Photos';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  handleGetPhotos,
} from '../../redux/slices/photos/PhotoSlice';

const PhotoContainer = () => {
  const dispatch = useDispatch();
  const { allPhotos } = useSelector(getPhotoState);

  // useEffect(() => {
  //   dispatch(handleGetPhotos());
  // }, []);

  return allPhotos.length ? <Photos photos={allPhotos} /> : null;
};

export default PhotoContainer;
