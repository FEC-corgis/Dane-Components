import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getModalState } from '../../../redux/slices/modal/modalSlice';

const Image = (props) => {
  const { showPopup } = useSelector(getModalState);
  return (
    <Popup showPopup={showPopup}>
      <Container className={'fade-in'}>
        <Img src={props.link} alt={'house'} />
      </Container>
    </Popup>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  object: cover;
`;

const Container = styled.div`
  max-width: 1084px;
  max-height: 722px;
`;

const Popup = styled.div`
  transition: 0.3s;
  opacity: ${({ showPopup }) => (showPopup ? '1' : '0')};
`;

export default Image;
