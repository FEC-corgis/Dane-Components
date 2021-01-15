import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/slices/modal/modalSlice';

const CloseButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShowModal(false));
  };

  return (
    <Container>
      <Button onClick={handleClick}>
        <span style={{ marginRight: '10px' }}>X</span>
        <span>Close</span>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center
  padding: 20px;
  width: 90px;
  height: 35px;
  border-radius: 10px;
  background-color: rgba(34, 34, 34, 0.1);
`;

const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;

  ${Container}:hover & {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;

export default CloseButton;
