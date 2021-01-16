import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { BsChevronLeft } from 'react-icons/bs';

const BackButton = () => {
  return (
    <Container>
      <Wrapper>
        <Circle>
          <Span>
            <BsChevronLeft className={'icon'} />
          </Span>
        </Circle>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 30px;
  height: 30px;
  position: relative;
`;

const Circle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  ${Wrapper}:hover & {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.05);
  }
`;

const Span = styled.span`
  position absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BackButton;
