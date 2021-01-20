import styled from 'styled-components';

export default styled.section`
	position: absolute;
	width: 100vw;
	height: 100vh;
	bottom: ${(props) => (!props.showShareModal ? '-100vh' : '0')};
	background-color: rgba(0, 0, 0, 0.75);
	transition: ${(props) => props.width < 743 && 'bottom 0.4s ease-out'};
	z-index: 6;
`;
