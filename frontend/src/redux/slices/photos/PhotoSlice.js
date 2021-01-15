import { createSlice } from '@reduxjs/toolkit';
import { getPhotos } from './helpers';

const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    allPhotos: [],
    current: null,
  },
  reducers: {
    setPhotos: (state, action) => {
      return {
        ...state,
        allPhotos: action.payload,
      };
    },
    setCurrentPhoto: (state, action) => {
      return {
        ...state,
        current: action.payload,
      };
    },
  },
});

export const { setPhotos, setCurrentPhoto } = photoSlice.actions;
export const getPhotoState = (state) => state.photos;

export const handleGetPhotos = () => async (dispatch) => {
  try {
    const photos = await getPhotos();
    dispatch(setPhotos(photos));
  } catch (error) {
    console.log('ERROR IN PHOTO SLICE');
  }
};

export const handleFindCurrent = (photos, id) => (dispatch) => {
  const photo = photos.find((item) => item.id === id);
  dispatch(setCurrentPhoto(photo));
};

export default photoSlice.reducer;
