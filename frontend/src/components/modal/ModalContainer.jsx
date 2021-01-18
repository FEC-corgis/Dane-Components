import React from 'react';
import styled from 'styled-components';
import ModalNav from './nav/ModalNav';
import CurrentPhoto from './photo/CurrentPhoto';
import DirectionButtons from './directionButtons/DirectionButtons';
import { useSelector } from 'react-redux';

const ModalContainer = () => {
  const { modal, photos } = useSelector((state) => state);

  return (
    photos.current && (
      <Container style={{ bottom: modal.showModal ? 0 : '-100vh' }}>
        <ModalNav
          count={photos.currentIndex + 1}
          total={photos.allPhotos.length}
        />
        <CurrentPhoto photos={photos.allPhotos} current={photos.current} />
        <DirectionButtons
          photos={photos.allPhotos}
          current={photos.current}
          index={photos.currentIndex}
        />
      </Container>
    )
  );
};

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: white;
  left: 0;
  transition: opacity 0.3s ease-out, bottom 0.3s ease-out;
`;

export default ModalContainer;
