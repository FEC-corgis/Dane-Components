import React from 'react';
import Title from './Title';
import Details from './Details';
import styled from 'styled-components';

const TitleGrid = (props) => {
  return (
    <Grid>
      <Title width={props.width} />

      <Details width={props.width} />
    </Grid>
  );
};

const Grid = styled.section`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export default TitleGrid;
