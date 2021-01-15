import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { useSelector } from 'react-redux';
import { getPhotoState } from '../../redux/slices/photos/PhotoSlice';
import { Flex } from '../photos/styles';

const CurrentPhoto = () => {
  const { current } = useSelector(getPhotoState);
  return (
    <Flex>
      <Container>
        {current && <Image link={current.link} />}
        <Description>
          <span>
            Welcome to South Lake Tahoe! This home is professionally managed by
            TurnKey Vacation Rentals.
          </span>
        </Description>
      </Container>
    </Flex>
  );
};

const Container = styled.div`
  width: 1084px;
  height: 720px;
`;

const Description = styled.div`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  margin: 10px;
`;

export default CurrentPhoto;
