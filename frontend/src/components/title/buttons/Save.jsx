import React from 'react';
import IconGroup from './styled-components/IconGroup';
import Underline from './styled-components/Underline';
import { IoHeartOutline } from 'react-icons/io5';

const Save = () => {
  return (
    <IconGroup>
      <IoHeartOutline />
      <Underline>Save</Underline>
    </IconGroup>
  );
};

export default Save;
