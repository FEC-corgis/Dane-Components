import styled from 'styled-components';
import Flex from '../../styled-components/Flex';

export default styled(Flex)`
	grid-row: 1 / 2;
	margin-bottom: ${(props) => props.width <= 743 && '10px'};
`;
