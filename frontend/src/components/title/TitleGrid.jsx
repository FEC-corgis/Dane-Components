import React from 'react';
import Grid from './styled-components/Grid';
import Title from './Title';
import Header from './Header';

const TitleGrid = (props) => (
	<Grid width={props.width}>
		<Title width={props.width} />
		<Header width={props.width} showIcons={props.showIcons} />
	</Grid>
);

export default TitleGrid;
