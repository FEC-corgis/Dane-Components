import React from 'react';
import CurrentPhoto from '../photo/CurrentPhoto';
import styled from 'styled-components';

const BigPhoto = () => {
  return (
    <Wrapper>
      <CurrentPhoto photos={photos.allPhotos} current={photos.current} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 632px;
  max-height: 424px;
`;

export default BigPhoto;
