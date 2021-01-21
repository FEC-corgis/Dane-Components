import React from 'react';
import TitleFlex from './styled-components/TitleFlex';
import TitleContainer from './styled-components/TitleContainer';
import PropertyName from './styled-components/PropertyName';
import { useSelector } from 'react-redux';
import { getPhotoState } from '../../redux/slices/photos/PhotoSlice';

const Title = () => {
	const { allPhotos } = useSelector(getPhotoState);

	return (
		<TitleContainer>
			<TitleFlex>
				<PropertyName>{allPhotos[0].Property.title}</PropertyName>
			</TitleFlex>
		</TitleContainer>
	);
};

export default Title;
