import React from 'react';
import styled from 'styled-components';

const PhotoCount = (props) => (
  <Container>{`${props.count} / ${props.total}`}</Container>
);

const Container = styled.div`
  font-size: 1rem;
`;

export default PhotoCount;
