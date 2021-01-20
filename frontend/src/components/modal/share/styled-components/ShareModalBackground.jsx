import styled from 'styled-components';

export default styled.section`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 10;
	visibility: ${(props) => !props.showShareModal && 'hidden'};
	bottom: ${(props) => (props.showShareModal ? 0 : '-100%')};
	transition: ${(props) => props.width < 743 && 'bottom 0.4s ease-out'};
`;
