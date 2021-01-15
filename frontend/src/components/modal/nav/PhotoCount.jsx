import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getPhotoState } from '../../../redux/slices/photos/PhotoSlice';

const PhotoCount = () => {
  const { current, allPhotos } = useSelector(getPhotoState);
  return (
    current && <Container>{`${current.id} / ${allPhotos.length}`}</Container>
  );
};

const Container = styled.div`
  font-size: 1rem;
`;

export default PhotoCount;
