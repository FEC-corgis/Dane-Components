import React from 'react';
import MobileNav from './nav/MobileNav';
import { ModalContainer } from '../MobileModal';

const MobileModal = () => {
  return (
    <ModalContainer>
      <MobileNav />
    </ModalContainer>
  );
};

export default MobileModal;
