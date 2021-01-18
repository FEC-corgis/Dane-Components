import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';
import Icon from './Icon';

const MobileNav = () => {
  return (
    <Container className={'nav'}>
      <BackButton />
      <Icon />
    </Container>
  );
};

const Container = styled.section`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 24px;
`;

export default MobileNav;
