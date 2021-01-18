import React from 'react';
import styled from 'styled-components';
import ModalContent from './content/ModalContent';
import { useSelector } from 'react-redux';

const Modal = (props) => {
  const { modal, photos } = useSelector((state) => state);

  return (
    <ModalContainer style={{ bottom: modal.showModal ? 0 : '-100vh' }}>
      <ModalContent photos={photos} height={props.height} />
    </ModalContainer>
  );
};

export const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: white;
  left: 0;
  transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
`;

export default Modal;
