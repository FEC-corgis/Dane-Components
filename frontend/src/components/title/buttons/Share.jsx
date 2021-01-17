import React from 'react';
import IconGroup from './styled-components/IconGroup';
import Underline from './styled-components/Underline';
import styled from 'styled-components';
import { IoShareOutline } from 'react-icons/io5';

const Share = () => (
  <IconGroup>
    <IoShareOutline />
    <span>Share</span>
  </IconGroup>
);

const LeftSpan = styled(Underline)`
  margin-right: 1rem;
`;

export default Share;
