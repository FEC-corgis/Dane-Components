import React, { useEffect } from 'react';
import LoadingApp from './components/LoadingApp';
import LoadedApp from './components/LoadedApp';
import { useDispatch, useSelector } from 'react-redux';
import {
    getHeaderState,
    handleGetServiceData,
} from './redux/slices/photos/HeaderServiceSlice';

const App = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(getHeaderState);
    const { id } = params;

    useEffect(() => {
        dispatch(handleGetServiceData(id));
    }, [id, dispatch]);

    return <LoadingApp />;
};

export default App;
