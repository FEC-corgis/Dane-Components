import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

const NextButton = () => {
  return (
    <Container>
      <FlexEnd>
        <Wrapper>
          <Circle>
            <IconSpan>
              <FaChevronRight style={{ fontSize: '0.75rem' }} />
            </IconSpan>
          </Circle>
        </Wrapper>
      </FlexEnd>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: calc(50% - 25px);
`;

const FlexEnd = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Wrapper = styled.div``;

const Circle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(34, 34, 34, 0.5);
  border-radius: 100%;
  margin-right: 40px;

  ${Wrapper}:hover & {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;

const IconSpan = styled.span`
  position: absolute;
  top: 35%;
  left: 35%;
`;

export default NextButton;
