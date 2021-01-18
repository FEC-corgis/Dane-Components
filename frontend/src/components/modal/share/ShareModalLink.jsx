import React from 'react';
import Link from './styled-components/Link';
import LinkBox from './styled-components/LinkBox';
import LinkContainer from './styled-components/LinkContainer';

const ShareModalLink = (props) => {
  return (
    <LinkContainer>
      <LinkBox>
        <span style={{ marginRight: '8px' }}>{<props.link.icon />}</span>
        <Link>{props.link.name}</Link>
      </LinkBox>
    </LinkContainer>
  );
};

export default ShareModalLink;
