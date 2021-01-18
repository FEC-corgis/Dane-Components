import React from 'react';
import CloseButton from './CloseButton';
import ShareModalHeader from './ShareModalHeader';
import ShareModalContainer from './styled-components/ShareModalContainer';

const ShareModalContent = () => {
  return (
    <ShareModalContainer>
      <CloseButton />
      <ShareModalHeader />
    </ShareModalContainer>
  );
};

export default ShareModalContent;
