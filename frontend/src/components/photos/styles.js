import styled from 'styled-components';

export const LeftContainer = styled.div`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 1;
  grid-row-end: span 2;
`;

export const ContainerTop = styled.div`
  overflow: hidden;
  grid-column-start: 3;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;
`;

export const ContainerBottom = styled.div`
  overflow: hidden;
  grid-column-start: 3;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
`;

export const ContainerTopRight = styled.div`
  border-top-right-radius: 1rem;
  overflow: hidden;
  grid-column-start: 4;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;
`;

export const ContainerBottomRight = styled.div`
  border-bottom-right-radius: 1rem;
  overflow: hidden;
  grid-column-start: 4;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
`;

export const LeftImg = styled.img`
  margin-left: -95px;
  height: 100%;
  width: 132.5%;
  object-fit: cover;
`;

export const MiddleImg = styled.img`
  margin-left: -40px;
  height: 100%;
  width: 132.5%;
  object-fit: cover;
`;

export const EndImg = styled.img`
  margin-left: -55px;
  height: 100%;
  width: 132.5%;
  object-fit: cover;
`;
