import React from 'react';
import TitleFlex from './styled-components/TitleFlex';
import TitleContainer from './styled-components/TitleContainer';
import PropertyName from './styled-components/PropertyName';

const Title = (props) => (
  <TitleContainer width={props.width}>
    <TitleFlex>
      <PropertyName>Updated Lake Tahoe House w/ Hot Tub</PropertyName>
    </TitleFlex>
  </TitleContainer>
);

export default Title;
