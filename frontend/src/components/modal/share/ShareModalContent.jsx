import React from 'react';
import CloseButton from './CloseButton';
import ShareModalHeader from './ShareModalHeader';
import ShareModalContainer from './styled-components/ShareModalContainer';
import ShareModalLink from './ShareModalLink';
import Links from './Links';

const ShareModalContent = () => (
  <ShareModalContainer onClick={(e) => e.stopPropagation()}>
    <CloseButton />
    <ShareModalHeader />
    {Links.map((link, i) => (
      <ShareModalLink key={i} link={link} />
    ))}
  </ShareModalContainer>
);

export default ShareModalContent;
