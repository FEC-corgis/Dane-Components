import React from 'react';
import Nav from './styled-components/Nav';
import Icons from './Icons';
import CloseButton from './CloseButton';
import PhotoCount from './PhotoCount';
import NavSection from './styled-components/NavSection';
import NavContainer from './styled-components/NavContainer';

const ModalNav = (props) => (
  <NavSection style={{ position: props.height <= 500 && 'absolute' }}>
    <NavContainer>
      <Nav>
        <CloseButton />
        {props.height > 500 && (
          <React.Fragment>
            <PhotoCount {...props} />
            <Icons />
          </React.Fragment>
        )}
      </Nav>
    </NavContainer>
  </NavSection>
);

export default ModalNav;
