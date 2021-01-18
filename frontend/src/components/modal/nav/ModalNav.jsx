import React from 'react';
import CloseButton from './CloseButton';
import PhotoCount from './PhotoCount';
import Icons from './Icons';
import styled from 'styled-components';

const ModalNav = (props) => (
  <NavSection>
    <NavContainer>
      <Nav>
        <CloseButton />
        <PhotoCount {...props} />
        <Icons />
      </Nav>
    </NavContainer>
  </NavSection>
);

const NavSection = styled.section`
  width: 100%;
  height: 94px;
  margin-bottom: 20px;
`;

const NavContainer = styled.div`
  padding: 40px 40px 20px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ModalNav;
