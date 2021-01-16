import React, { useEffect } from 'react';
import MobileNav from './nav/MobileNav';
import PhotosGrid from './photo/PhotosGrid';
import styled from 'styled-components';
import { ModalContainer } from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhotoState,
  handleGroupPhotos,
} from '../../../redux/slices/photos/PhotoSlice';

const MobileModal = () => {
  const dispatch = useDispatch();
  const { allPhotos, groups } = useSelector(getPhotoState);

  useEffect(() => {
    dispatch(handleGroupPhotos(allPhotos));
  }, [allPhotos]);

  return (
    <MobileModalContainer>
      <MobileNav />
      {groups.map((group, i) => {
        return (
          <PhotosGrid
            key={i}
            big={group.big ? group.big.link : null}
            left={group.left ? group.left.link : null}
            right={group.right ? group.right.link : null}
          />
        );
      })}
    </MobileModalContainer>
  );
};

const MobileModalContainer = styled(ModalContainer)`
  overflow: scroll;
`;

export default MobileModal;
