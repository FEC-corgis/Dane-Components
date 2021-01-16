import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';

const MobileNav = () => {
  return (
    <Container className={'nav'}>
      <BackButton />
      <div className=""></div>
    </Container>
  );
};

const Container = styled.section`
  // background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 24px;
`;

export default MobileNav;
