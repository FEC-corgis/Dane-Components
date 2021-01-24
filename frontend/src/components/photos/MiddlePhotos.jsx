import React from 'react';
import MiddleImg from './styled-components/MiddleImg';
import ContainerTop from './styled-components/ContainerTop';
import ContainerBottom from './styled-components/ContainerBottom';

const MiddlePhotos = (props) => (
    <React.Fragment>
        <ContainerTop
            className={'photo-container'}
            onClick={() => props.handleClick(props.photo1.id)}
        >
            <MiddleImg
                src={props.photo1.link}
                alt={'house'}
                data-testid={'middle-top'}
            />
        </ContainerTop>
        <ContainerBottom
            className={'photo-container'}
            onClick={() => props.handleClick(props.photo2.id)}
        >
            <MiddleImg
                src={props.photo2.link}
                alt={'house'}
                data-testid={'middle-bottom'}
            />
        </ContainerBottom>
    </React.Fragment>
);

export default MiddlePhotos;
