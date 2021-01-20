import React from 'react';
import ModalContent from './content/ModalContent';
import ModalContainer from './styled-components/ModalContainer';
import { useSelector } from 'react-redux';

const Modal = (props) => {
	const { modal, photos } = useSelector((state) => state);

	return (
		<ModalContainer style={{ bottom: modal.showModal ? 0 : '-100%' }}>
			<ModalContent photos={photos} height={props.height} />
		</ModalContainer>
	);
};

export default Modal;
