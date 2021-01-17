import React from 'react';
import LeftPhoto from './LeftPhoto';
import MiddlePhotos from './MiddlePhotos';
import EndPhotos from './EndPhotos';
import styled from 'styled-components';
import { Flex } from './styles';

const AllPhotos = (props) => (
  <Flex style={{ padding: props.width >= 1128 ? '0 80px' : '0 40px' }}>
    <Grid>
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
    </Grid>
  </Flex>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 8px;
  max-width: 1130px;
  max-height: 53vh;
  min-height: 300px;
`;

export default AllPhotos;
