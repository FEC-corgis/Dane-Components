import React from 'react';
import styled from 'styled-components';
import { Flex } from '../photos/styles';

const Title = (props) => (
  <Container width={props.width}>
    <TitleFlex>
      <Name>Updated Lake Tahoe House w/ Hot Tub</Name>
    </TitleFlex>
  </Container>
);

const Container = styled(Flex)`
  grid-row: 1 / 2;
  padding: ${(props) =>
    props.width > 1128 ? '24px 80px 0px 80px' : '24px 40px 0px 40px'};
`;

const TitleFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1130px;
`;

const Name = styled.h1`
  font-weight: 400;
  font-size: 1.8rem;
`;

export default Title;
