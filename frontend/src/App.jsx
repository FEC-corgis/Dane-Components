import React, { useEffect } from 'react';
import Modal from './components/modal/Modal';
import Photos from './components/photos/Photos';
import MobileModal from './components/modal/mobile/MobileModal';
import ShareModal from './components/modal/share/ShareModal';
import { useDispatch, useSelector } from 'react-redux';
import {
	getPhotoState,
	handleGetPhotos,
} from './redux/slices/photos/PhotoSlice';

const App = () => {
	const dispatch = useDispatch();
	const { current, allPhotos } = useSelector(getPhotoState);

	useEffect(() => {
		dispatch(handleGetPhotos());
	}, []);

	return (
		current && (
			<React.Fragment>
				<ShareModal />
				<Modal />
				<MobileModal />
				<Photos photos={allPhotos} />
			</React.Fragment>
		)
	);
};

export default App;
