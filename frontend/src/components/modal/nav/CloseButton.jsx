import React from 'react';
import Button from './styled-components/Button';
import CloseButtonContainer from './styled-components/CloseButtonContainer';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../../redux/slices/modal/modalSlice';

const CloseButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShowModal(false));
  };

  return (
    <CloseButtonContainer>
      <Button onClick={handleClick}>
        <span style={{ marginRight: '10px' }}>X</span>
        <span>Close</span>
      </Button>
    </CloseButtonContainer>
  );
};

export default CloseButton;
