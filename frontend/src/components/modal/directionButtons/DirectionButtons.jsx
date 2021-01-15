import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  setCurrentPhoto,
} from '../../../redux/slices/photos/PhotoSlice';

const DirectionButtons = () => {
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const { current, allPhotos } = useSelector(getPhotoState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allPhotos.length && allPhotos[current.id - 2] == null) {
      setShowLeft(false);
    } else {
      setShowLeft(true);
    }

    if (allPhotos.length && allPhotos[current.id] == null) {
      setShowRight(false);
    } else {
      setShowRight(true);
    }
  }, [current]);

  const handleClick = (index) => {
    dispatch(setCurrentPhoto(allPhotos[index]));
  };

  return (
    <Container>
      <Flex>
        <Wrapper
          style={{ visibility: !showLeft && 'hidden' }}
          onClick={() => handleClick(current.id - 2)}
        >
          <CircleLeft>
            <IconSpan>
              <FaChevronLeft style={{ fontSize: '0.75rem' }} />
            </IconSpan>
          </CircleLeft>
        </Wrapper>
        <Wrapper
          style={{ visibility: !showRight && 'hidden' }}
          onClick={() => handleClick(current.id)}
        >
          <CircleRight>
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
