import React, { useEffect } from 'react';
import MainPhoto from './MainPhoto';
import styled from 'styled-components';
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
  return photos.length ? (
    <Container>
      <MainPhoto link={photos[0].link} />
    </Container>
  ) : null;
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 20%;
  border-radius: 1rem;
`;

export default PhotoContainer;
