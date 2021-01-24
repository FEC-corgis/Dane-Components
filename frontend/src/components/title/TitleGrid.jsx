import React from 'react';
import Grid from './styled-components/Grid';
import Title from './components/title/Title';
import Header from './components/header/Header';

const TitleGrid = (props) => (
    <Grid>
        <Title />
        <Header showIcons={props.showIcons} />
    </Grid>
);

export default TitleGrid;
