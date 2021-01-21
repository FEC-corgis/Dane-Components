import styled from 'styled-components';

export default styled.div`
	padding: ${(props) => (props.width > 1127 ? '0 80px' : '0 40px')};
`;
