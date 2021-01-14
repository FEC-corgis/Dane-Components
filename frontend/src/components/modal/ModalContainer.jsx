import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import { useSelector } from 'react-redux';
import { getModalState } from '../../redux/slices/modal/modalSlice';

const ModalContainer = () => {
  const showModal = useSelector(getModalState);

  return (
    <Container style={{ bottom: showModal ? 0 : '-100vh' }}>
      <CloseButton />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: white;
  left: 0;
  transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
`;

export default ModalContainer;
