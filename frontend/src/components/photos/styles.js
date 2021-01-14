import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 504px;
  width: 564px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
`;

export const MainImg = styled.img`
  height: 100%;
  margin-left: -95px;
`;

export const Img = styled.img`
  height: 100%;
  margin-left: -55px;
`;

export const Parent = styled.div`
  width: 274px;
  height: 504px;
  margin-left: 8px;
`;

export const ContainerTop = styled.div`
  width: 274px;
  height: 252px;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const ContainerBottom = styled.div`
  width: 274px;
  height: 244px;
  overflow: hidden;
`;

export const ContainerTopRight = styled(ContainerTop)`
  border-top-right-radius: 1rem;
`;

export const ContainerBottomRight = styled(ContainerBottom)`
  border-bottom-right-radius: 1rem;
`;
