import styled from 'styled-components';

export default styled.div`
	width: ${(props) => (props.width > 743 ? '376px' : '100%')};
	height: ${(props) => (props.width > 743 ? '794px' : '100%')};
	border: ${(props) => (props.width > 743 ? '1px solid black' : 'none')};
	background-color: #fff;
	padding: 32px;
`;
