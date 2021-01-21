import styled from 'styled-components';

export default styled.section`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	max-height: 114px;

	margin: ${(props) => props.width <= 743 && '0 24px'};
	padding: ${(props) =>
		props.width > 1127
			? '0 80px'
			: props.width > 743
			? '0 40px'
			: '32px 0 32px 0'};
`;
