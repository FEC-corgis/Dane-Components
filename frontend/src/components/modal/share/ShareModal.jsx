import React from 'react';
import ShareModalBackground from './styled-components/ShareModalBackground';
import ShareModalContent from './components/ShareModalContent';
import ShareModalFlex from './styled-components/ShareModalFlex';
import { useDispatch, useSelector } from 'react-redux';
import {
	getModalState,
	setShowShareModal,
} from '../../../redux/slices/modal/modalSlice';

const ShareModal = (props) => {
	const dispatch = useDispatch();
	const { showShareModal } = useSelector(getModalState);

	return (
		<ShareModalBackground
			onClick={() => dispatch(setShowShareModal(false))}
			width={props.width}
			showShareModal={showShareModal}
		>
			<ShareModalFlex>
				<ShareModalContent width={props.width} />
			</ShareModalFlex>
		</ShareModalBackground>
	);
};

export default ShareModal;
