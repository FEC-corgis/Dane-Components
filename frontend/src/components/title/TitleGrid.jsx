import React from 'react';
import Grid from './styled-components/Grid';
import Title from './Title';
import Header from './Header';

const TitleGrid = (props) => (
	<Grid>
		<Title />
		<Header showIcons={props.showIcons} />
	</Grid>
);

export default TitleGrid;
