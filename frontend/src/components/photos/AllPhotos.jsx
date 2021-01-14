import React from 'react';
import LeftPhoto from './LeftPhoto';
import MiddlePhotos from './MiddlePhotos';
import EndPhotos from './EndPhotos';
import styled from 'styled-components';
import { Flex } from './styles';

const AllPhotos = (props) => {
  return (
    <Flex style={{ padding: props.width >= 1128 ? '0 80px' : '0 40px' }}>
      <Grid>
        <LeftPhoto link={props.photos[0].link} />
        <MiddlePhotos photo1={props.photos[1]} photo2={props.photos[3]} />
        <EndPhotos photo1={props.photos[2]} photo2={props.photos[4]} />
      </Grid>
    </Flex>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 8px;
  max-width: 1130px;
  max-height: 504px;
`;

export default AllPhotos;
