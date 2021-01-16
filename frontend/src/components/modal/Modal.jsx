import React from 'react';
import styled from 'styled-components';
import UseWindowSize from '../../helpers/UseWindowSize';
import NormalModalContent from './content/Normal';
import { useSelector } from 'react-redux';

const Modal = () => {
  const { modal, photos } = useSelector((state) => state);
  const { height } = UseWindowSize();

  return (
    <ModalContainer style={{ bottom: modal.showModal ? 0 : '-100vh' }}>
      <NormalModalContent photos={photos} height={height} />
    </ModalContainer>
  );
};

export const ModalContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;
  left: 0;
  transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
`;

export default Modal;
