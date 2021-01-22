import React from 'react';
import LeftPhoto from './LeftPhoto';
import MiddlePhotos from './MiddlePhotos';
import EndPhotos from './EndPhotos';
import PhotosGrid from './styled-components/PhotosGrid';
import PhotosContainer from './styled-components/PhotosContainer';
import Flex from '../styled-components/Flex';

const AllPhotos = (props) => (
  <Flex style={{ padding: props.width >= 1128 ? '0 80px' : '0 40px' }}>
    <PhotosContainer>
      <PhotosGrid>
        <LeftPhoto photo={props.photos[0]} handleClick={props.handleClick} />
        <MiddlePhotos
          photo1={props.photos[1]}
          photo2={props.photos[3]}
          handleClick={props.handleClick}
        />
        <EndPhotos
          photo1={props.photos[2]}
          photo2={props.photos[4]}
          handleClick={props.handleClick}
        />
      </PhotosGrid>
    </PhotosContainer>
  </Flex>
);

export default AllPhotos;
