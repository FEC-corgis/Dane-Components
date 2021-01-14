import { combineReducers } from '@reduxjs/toolkit';
import photoReducer from './photos/PhotoSlice';
import modalReducer from './modal/modalSlice';

export default combineReducers({
  photos: photoReducer,
  modal: modalReducer,
});
