import React from 'react';
import IconGroup from './styled-components/IconGroup';
import Underline from './styled-components/Underline';
import { IoShareOutline } from 'react-icons/io5';

const Share = () => (
  <IconGroup>
    <IoShareOutline />
    <Underline>Share</Underline>
  </IconGroup>
);

export default Share;
