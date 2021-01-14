import React, { useEffect } from 'react';
import Photos from './Photos';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  handleGetPhotos,
} from '../../redux/slices/photos/PhotoSlice';

const PhotoContainer = () => {
  const dispatch = useDispatch();
  const photos = useSelector(getPhotoState);

  useEffect(() => {
    dispatch(handleGetPhotos());
  }, []);

  return photos.length ? <Photos photos={photos} /> : null;
};

export default PhotoContainer;
