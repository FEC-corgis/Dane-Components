import styled from 'styled-components';

export const LeftContainer = styled.div`
  height: 504px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
`;

export const LeftImg = styled.img`
  margin-left: -95px;
  height: 100%;
`;

export const MiddleImg = styled.img`
  margin-left: -55px;
  height: 100%;
`;

export const Img = styled.img`
  margin-left: -55px;
  height: 100%;
`;

export const MiddleParent = styled.div`
  height: 504px;
`;

export const EndParent = styled.div`
  height: 504px;
`;

export const ContainerTop = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  height: 252px;
`;

export const ContainerBottom = styled.div`
  overflow: hidden;
  height: 244px;
`;

export const ContainerTopRight = styled(ContainerTop)`
  border-top-right-radius: 1rem;
`;

export const ContainerBottomRight = styled(ContainerBottom)`
  border-bottom-right-radius: 1rem;
`;
