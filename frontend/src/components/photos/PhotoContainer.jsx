import React, { useEffect } from 'react';
import MainPhoto from './MainPhoto';
import MiddlePhotos from './MiddlePhotos';
import EndPhotos from './EndPhotos';
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
    <Flex>
      <Grid>
        <MainPhoto link={photos[0].link} />
        <MiddlePhotos photo1={photos[1]} photo2={photos[3]} />
        <EndPhotos photo1={photos[2]} photo2={photos[4]} />
      </Grid>
    </Flex>
  ) : null;
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 8px;
  max-width: 1130px;
  max-height: 504px;
`;

// margin-left: 390px;
// margin-right: 650px;
// justify-items: center;
/**display: flex;
  justify-content: flex-start;
  margin: 0 20%;
  border-radius: 1rem; */
export default PhotoContainer;
