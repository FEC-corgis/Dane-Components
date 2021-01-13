import React from 'react';
import styled from 'styled-components';

const MainPhoto = (props) => {
  return (
    <Container>
      <Main src={props.link} alt={'house'} />
    </Container>
  );
};

const Container = styled.div`
  height: 504px;
  width: 564px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
`;

const Main = styled.img`
  height: 100%;
  margin-left: -95px;
`;

export default MainPhoto;
