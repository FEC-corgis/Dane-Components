import React from 'react';
import LoadingPhotos from './photos/components/allPhotos/LoadingPhotos';
import LoadingTitle from './title/LoadingTitle';
import LoadingMain from './photos/components/LoadingMain';
import Desktop from './photos/styled-components/Desktop';
import Mobile from './photos/styled-components/Mobile';

const LoadingApp = () => (
    <section>
        <Desktop>
            <LoadingTitle />
            <LoadingPhotos />
        </Desktop>
        <Mobile>
            <LoadingMain />
            <LoadingTitle />
        </Mobile>
    </section>
);

export default LoadingApp;
