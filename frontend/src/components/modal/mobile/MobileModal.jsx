import React, { useEffect } from 'react';
import MobileNav from './nav/MobileNav';
import PhotosGrid from './photo/PhotosGrid';
import FadeIn from './styled-components/FadeIn';
import MobileModalContainer from './styled-components/MobileModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import { handleGroupPhotos } from '../../../redux/slices/photos/HeaderServiceSlice';

const MobileModal = () => {
    const dispatch = useDispatch();
    const { modal, photos } = useSelector((state) => state);

    useEffect(() => {
        dispatch(handleGroupPhotos(photos.allPhotos));
    }, [photos.allPhotos, dispatch]);

    return (
        <MobileModalContainer
            style={{ bottom: modal.showModal ? 0 : '-100vh' }}
        >
            <MobileNav />
            <FadeIn className={'fade-in'}>
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
            </FadeIn>
        </MobileModalContainer>
    );
};

export default MobileModal;
