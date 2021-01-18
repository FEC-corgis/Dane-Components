import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { Flex } from '../../photos/styles';

const CurrentPhoto = (props) => (
  <Flex>
    <div>
      <Image link={props.current.link} height={props.height} />
      {props.height >= 625 && (
        <Description>
          <span>{props.current.description}</span>
        </Description>
      )}
    </div>
  </Flex>
);

const Description = styled.div`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  margin: 10px;
`;

export default CurrentPhoto;
