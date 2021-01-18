import React from 'react';
import Icon from './Icon';
import BackButton from './BackButton';
import MobileNavContainer from './styled-components/MobileNavContainer';

const MobileNav = () => {
  return (
    <MobileNavContainer className={'nav'}>
      <BackButton />
      <Icon />
    </MobileNavContainer>
  );
};

export default MobileNav;
