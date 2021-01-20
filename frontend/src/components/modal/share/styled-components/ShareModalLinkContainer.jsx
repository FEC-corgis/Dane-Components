import styled from 'styled-components';

export default styled.div`
	margin-top: ${(props) => (props.width > 510 ? 0 : '24px')};
`;
