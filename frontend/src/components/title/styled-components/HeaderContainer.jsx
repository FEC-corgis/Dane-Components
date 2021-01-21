import styled from 'styled-components';
import Flex from '../../styled-components/Flex';

export default styled(Flex)`
	grid-row: 2 / 2;
	border-bottom: ${(props) =>
		props.width <= 743 && '1px solid rgb(225, 225, 225)'};
	padding-bottom: ${(props) => props.width <= 743 && '24px'};
`;
