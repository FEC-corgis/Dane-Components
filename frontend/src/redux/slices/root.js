import { combineReducers } from '@reduxjs/toolkit';
import headerServiceReducer from './photos/HeaderServiceSlice';
import modalReducer from './modal/modalSlice';

export default combineReducers({
    header: headerServiceReducer,
    modal: modalReducer,
});
