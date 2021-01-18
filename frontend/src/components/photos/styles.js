import styled from 'styled-components';

export const LeftContainer = styled.div`
  position: relative;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 1;
  grid-row-end: span 2;
  cursor: pointer;

  &:hover::after {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`;

export const ContainerTop = styled.div`
  position: relative;
  overflow: hidden;
  grid-column-start: 3;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;
  cursor: pointer;
`;

export const ContainerBottom = styled.div`
  position: relative;
  overflow: hidden;
  grid-column-start: 3;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
  cursor: pointer;
`;

export const ContainerTopRight = styled.div`
  position: relative;
  border-top-right-radius: 1rem;
  overflow: hidden;
  grid-column-start: 4;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;
  cursor: pointer;

  &:hover::after {
    border-top-right-radius: 1rem;
  }
`;

export const ContainerBottomRight = styled.div`
  position: relative;
  border-bottom-right-radius: 1rem;
  overflow: hidden;
  grid-column-start: 4;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
  cursor: pointer;

  &:hover::after {
    border-bottom-right-radius: 1rem;
  }
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

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
