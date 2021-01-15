import { createSlice } from '@reduxjs/toolkit';
import { getPhotos } from './helpers';

const photoSlice = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    setPhotos: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPhotos } = photoSlice.actions;
export const getPhotoState = (state) => state.photos;

export const handleGetPhotos = () => async (dispatch) => {
  try {
    const photos = await getPhotos();
    dispatch(setPhotos(photos));
  } catch (error) {
    console.log('ERROR IN PHOTO SLICE');
  }
};

export default photoSlice.reducer;
