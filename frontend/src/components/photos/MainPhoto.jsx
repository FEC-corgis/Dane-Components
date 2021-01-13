import React from 'react';
import styled from 'styled-components';

const MainPhoto = (props) => {
  return <div>{<Main src={props.link} alt={'house'} />}</div>;
};

const Main = styled.img`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

export default MainPhoto;
