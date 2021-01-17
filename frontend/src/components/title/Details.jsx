import React from 'react';
import styled from 'styled-components';
import Share from './buttons/Share';
import Save from './buttons/Save';
import { Flex } from '../photos/styles';
import { AiTwotoneStar } from 'react-icons/ai';

const Details = (props) => (
  <Container width={props.width}>
    <DetailsFlex>
      <Left>
        <AiTwotoneStar style={{ color: '#FF385C', marginRight: '0.25rem' }} />
        <Flex>
          <p>4.36</p>
          <Grey>(111) · South Lake Tahoe, California, United States</Grey>
        </Flex>
      </Left>
      <Icons>
        <Share />
        <Save />
      </Icons>
    </DetailsFlex>
  </Container>
);

const Container = styled(Flex)`
  grid-row: 2 / 2;
  padding: ${(props) => (props.width > 1128 ? '0px 80px' : '0px 40px')};
`;

const DetailsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1130px;
`;

const Left = styled.div`
  display: flex;
`;

const Grey = styled.p`
  color: grey;
  padding-left: 5px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 155px;
`;

export default Details;
