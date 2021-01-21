import React from 'react';
import AllPhotos from './AllPhotos';
import MainPhoto from './MainPhoto';
import TitleGrid from '../title/TitleGrid';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/slices/modal/modalSlice';
import { handleFindCurrent } from '../../redux/slices/photos/PhotoSlice';

const Photos = (props) => {
	const dispatch = useDispatch();

	const handleClick = (id) => {
		dispatch(setShowModal(true));
		dispatch(handleFindCurrent(props.photos, id));
	};

	return (
		<React.Fragment>
			{props.width > 743 ? (
				<React.Fragment>
					<TitleGrid showIcons={true} />
					<AllPhotos
						photos={props.photos}
						handleClick={handleClick}
					/>
				</React.Fragment>
			) : (
				<React.Fragment>
					<MainPhoto
						photo={props.photos[0]}
						handleClick={handleClick}
					/>
					<TitleGrid showIcons={false} />
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Photos;
