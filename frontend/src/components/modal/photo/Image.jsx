import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getModalState } from '../../../redux/slices/modal/modalSlice';

const Image = (props) => {
  const { showPopup } = useSelector(getModalState);
  return (
    <Popup showPopup={showPopup}>
      <div className={'fade-in'}>
        <Img src={props.link} alt={'house'} />
      </div>
    </Popup>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  max-height: 75vh;
  object-fit: contain;
`;

const Popup = styled.div`
  transition: 0.3s;
  opacity: ${({ showPopup }) => (showPopup ? '1' : '0')};
`;

export default Image;
