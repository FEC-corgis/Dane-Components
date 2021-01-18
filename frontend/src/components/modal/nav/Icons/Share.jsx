import React from 'react';
import Hover from '../styled-components/Hover';
import { IoShareOutline } from 'react-icons/io5';

const Share = () => (
  <Hover>
    <IoShareOutline style={{ marginRight: '1rem' }} />
  </Hover>
);

export default Share;
