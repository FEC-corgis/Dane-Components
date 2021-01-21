import styled from 'styled-components';
import Flex from '../../styled-components/Flex';

export default styled(Flex)`
	grid-row: 2 / 2;

	@media (max-width: 743px) {
		border-bottom: 1px solid rgb(225, 225, 225);
		padding-bottom: 24px;
	}
`;
