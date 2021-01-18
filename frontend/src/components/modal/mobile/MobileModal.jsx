import React, { useEffect } from 'react';
import MobileNav from './nav/MobileNav';
import PhotosGrid from './photo/PhotosGrid';
import MobileModalContainer from './styled-components/MobileModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import { handleGroupPhotos } from '../../../redux/slices/photos/PhotoSlice';

const MobileModal = (props) => {
  const dispatch = useDispatch();
  const { modal, photos } = useSelector((state) => state);

  useEffect(() => {
    dispatch(handleGroupPhotos(photos.allPhotos));
  }, [photos.allPhotos]);

  return (
    <MobileModalContainer style={{ bottom: modal.showModal ? 0 : '-100vh' }}>
      <MobileNav />
      <div
        className={'fade-in'}
        style={{ padding: props.width >= 743 ? '0 100px' : 0 }}
      >
        {photos.groups.map((group, i) => {
          return (
            <PhotosGrid
              key={i}
              big={group.big ? group.big.link : null}
              left={group.left ? group.left.link : null}
              right={group.right ? group.right.link : null}
            />
          );
        })}
      </div>
    </MobileModalContainer>
  );
};

export default MobileModal;
