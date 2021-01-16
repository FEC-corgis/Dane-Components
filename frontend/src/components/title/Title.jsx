import React from 'react';
import styled from 'styled-components';
import { Flex } from '../photos/styles';

const Title = (props) => {
  return (
    <TitleFlex width={props.width}>
      <Container>
        <h1>Header</h1>
        <div className="">Other</div>
      </Container>
    </TitleFlex>
  );
};

const TitleFlex = styled(Flex)`
  padding: ${(props) => (props.width > 1128 ? '0 80px' : '0 40px')};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1130px;
  width: 100%;
`;

export default Title;
