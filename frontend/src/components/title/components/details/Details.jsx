import React from 'react';
import GreyText from './styled-components/GreyText';
import SuperHost from './components/SuperHost';
import RatingText from './styled-components/RatingText';
import DetailsContainer from './styled-components/DetailsContainer';
import { AiTwotoneStar } from 'react-icons/ai';

const Details = () => (
    <React.Fragment>
        <DetailsContainer>
            <AiTwotoneStar
                style={{ color: '#FF385C', marginRight: '0.25rem' }}
            />
            <RatingText>4.36</RatingText>
            <GreyText>(111)&nbsp;</GreyText>
            <GreyText>·&nbsp;</GreyText>
            <SuperHost />
            <GreyText>Superhost&nbsp;</GreyText>
            <GreyText>·&nbsp;</GreyText>
            <GreyText>South Lake Tahoe, California, United States</GreyText>
        </DetailsContainer>
    </React.Fragment>
);

export default Details;
