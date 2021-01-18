import styled from 'styled-components';
import { Flex } from '../../photos/styles';

export default styled(Flex)`
  grid-row: 1 / 2;
  padding: ${(props) =>
    props.width > 1128 ? '24px 80px 0px 80px' : '24px 40px 0px 40px'};
`;
