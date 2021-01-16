import React from 'react';
import MobileNav from './nav/MobileNav';
import CurrentPhoto from '../photo/CurrentPhoto';
import { ModalContainer } from '../MobileModal';
import { useSelector } from 'react-redux';

const MobileModal = () => {
  const { modal, photos } = useSelector((state) => state);
  return (
    photos.current && (
      <ModalContainer>
        <MobileNav />
        <CurrentPhoto photos={photos.allPhotos} current={photos.current} />
      </ModalContainer>
    )
  );
};

export default MobileModal;
