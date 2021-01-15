import React from 'react';
import styled from 'styled-components';

const JustMain = (props) => {
  return (
    <Flex>
      <MainContainer onClick={() => props.handleClick(props.photo.id)}>
        <MainImg src={props.photo.link} alt={'house'} />
      </MainContainer>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 743px;
`;

const MainImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default JustMain;
