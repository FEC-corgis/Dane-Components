import { combineReducers } from '@reduxjs/toolkit';
import photoReducer from './photos/PhotoSlice';

export default combineReducers({
  photos: photoReducer,
});
