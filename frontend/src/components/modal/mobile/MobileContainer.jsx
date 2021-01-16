import React from 'react';
import MobileNav from './nav/MobileNav';
import PhotosGrid from './photo/PhotosGrid';
import { ModalContainer } from '../MobileModal';
import { useSelector } from 'react-redux';
import { getPhotoState } from '../../../redux/slices/photos/PhotoSlice';

const MobileModal = () => {
  const photos = useSelector(getPhotoState);
  return (
    photos.current && (
      <ModalContainer>
        <MobileNav />
        <PhotosGrid />
      </ModalContainer>
    )
  );
};

export default MobileModal;
