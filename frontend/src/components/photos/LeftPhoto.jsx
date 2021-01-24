import React from 'react';
import LeftImg from './styled-components/LeftImg';
import LeftContainer from './styled-components/LeftContainer';

const LeftPhoto = (props) => (
    <LeftContainer
        className={'photo-container'}
        onClick={() => props.handleClick(props.photo.id)}
    >
        <LeftImg
            src={props.photo.link}
            alt={'house'}
            data-testid={'left-img'}
        />
    </LeftContainer>
);

export default LeftPhoto;
