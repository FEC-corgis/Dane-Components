import React from 'react';
import Grid from './styled-components/Grid';
import Title from './Title';
import Header from './Header';

const TitleGrid = (props) => {
  return (
    <Grid>
      <Title width={props.width} />
      <Header width={props.width} />
    </Grid>
  );
};

export default TitleGrid;
