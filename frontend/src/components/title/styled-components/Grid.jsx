import styled from 'styled-components';

export default styled.section`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	max-height: 114px;
	padding: 0 80px;

	@media (max-width: 1127px) {
		padding: 0 40px;
	}

	@media (max-width: 743px) {
		margin: 0 24px;
		padding: 32px 0 32px 0;
	}
`;
