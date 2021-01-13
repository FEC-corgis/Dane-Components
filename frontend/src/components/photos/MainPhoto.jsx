import React from 'react';
import styled from 'styled-components';

const MainPhoto = (props) => {
  return <Container>{<Main src={props.link} alt={'house'} />}</Container>;
};

const Container = styled.div`
  height: 475px;
  width: 575px;
`;

const Main = styled.img`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
//transform: scale(1.2);

export default MainPhoto;
