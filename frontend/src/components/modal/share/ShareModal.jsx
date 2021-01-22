import React from 'react';
import ShareModalBackground from './styled-components/ShareModalBackground';
import ShareModalContent from './components/ShareModalContent';
import ShareModalFlex from './styled-components/ShareModalFlex';
import { useDispatch } from 'react-redux';
import { setShowShareModal } from '../../../redux/slices/modal/modalSlice';

const ShareModal = () => {
  const dispatch = useDispatch();

  return (
    <ShareModalBackground onClick={() => dispatch(setShowShareModal(false))}>
      <ShareModalFlex>
        <ShareModalContent />
      </ShareModalFlex>
    </ShareModalBackground>
  );
};

export default ShareModal;
