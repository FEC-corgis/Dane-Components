import React from 'react';
import GreyText from './styled-components/GreyText';
import SuperHost from './SuperHost';
import RatingText from './styled-components/RatingText';
import { Flex } from '../../photos/styles';
import { AiTwotoneStar } from 'react-icons/ai';

const Details = () => (
  <React.Fragment>
    <AiTwotoneStar style={{ color: '#FF385C', marginRight: '0.25rem' }} />
    <Flex>
      <RatingText>4.36</RatingText>
      <GreyText>(111)&nbsp;</GreyText>
      <GreyText>·&nbsp;</GreyText>
      <SuperHost />
      <GreyText>Superhost&nbsp;</GreyText>
      <GreyText>·&nbsp;</GreyText>
      <GreyText>South Lake Tahoe, California, United States</GreyText>
    </Flex>
  </React.Fragment>
);

export default Details;
