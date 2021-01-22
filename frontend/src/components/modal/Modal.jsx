import React from 'react';
import ModalContent from './content/ModalContent';
import ModalContainer from './styled-components/ModalContainer';
import { useSelector } from 'react-redux';

const Modal = () => {
	const { modal, photos } = useSelector((state) => state);

	return (
		<ModalContainer showModal={modal.showModal}>
			<ModalContent photos={photos} />
		</ModalContainer>
	);
};

export default Modal;
