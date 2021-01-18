import React from 'react';
import ShareModalBackground from './styled-components/ShareModalBackground';
import ShareModalContent from './ShareModalContent';
import ShareModalFlex from './styled-components/ShareModalFlex';

const ShareModal = () => {
  return (
    <ShareModalBackground>
      <ShareModalFlex>
        <ShareModalContent />
      </ShareModalFlex>
    </ShareModalBackground>
  );
};

export default ShareModal;
