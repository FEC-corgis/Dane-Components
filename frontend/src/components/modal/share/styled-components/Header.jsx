import styled from 'styled-components';

export default styled.header`
	width: ${(props) => (props.width > 743 ? '312px' : '100%')};
	height: ${(props) => (props.width > 743 ? '84px' : '54px')};
`;
