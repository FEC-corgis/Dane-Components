import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { handleTransition } from '../../../redux/slices/modal/modalSlice';

const DirectionButtons = (props) => {
  const dispatch = useDispatch();
  const [mouseDown, setMouseDown] = useState(false);

  const handleClick = (index) => {
    const photo = props.photos[index];
    if (photo != null) {
      dispatch(handleTransition(photo, index));
    }
  };

  return (
    <Container>
      <Flex>
        <Wrapper
          style={{
            visibility: props.index === 0 && 'hidden',
          }}
          onClick={() => handleClick(props.index - 1)}
          onMouseDown={() => setMouseDown(true)}
          onMouseUp={() => setMouseDown(false)}
          onMouseLeave={() => setMouseDown(false)}
        >
          <CircleLeft
            style={{
              width: mouseDown && '43px',
              height: mouseDown && '43px',
            }}
          >
            <IconSpan>
              <FaChevronLeft style={{ fontSize: '0.75rem' }} />
            </IconSpan>
          </CircleLeft>
        </Wrapper>
        <Wrapper
          style={{
            visibility: props.index === props.photos.length - 1 && 'hidden',
          }}
          onClick={() => handleClick(props.index + 1)}
          onMouseDown={() => setMouseDown(true)}
          onMouseUp={() => setMouseDown(false)}
          onMouseLeave={() => setMouseDown(false)}
        >
          <CircleRight
            style={{
              width: mouseDown && '43px',
              height: mouseDown && '43px',
            }}
          >
            <IconSpan>
              <FaChevronRight style={{ fontSize: '0.75rem' }} />
            </IconSpan>
          </CircleRight>
        </Wrapper>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 25px);
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

const CircleRight = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border: 1px solid rgba(34, 34, 34, 0.5);
  border-radius: 100%;
  margin-right: 45px;

  ${Wrapper}:hover & {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;

const CircleLeft = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border: 1px solid rgba(34, 34, 34, 0.5);
  border-radius: 100%;
  margin-left: 45px;

  ${Wrapper}:hover & {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;

const IconSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default DirectionButtons;
