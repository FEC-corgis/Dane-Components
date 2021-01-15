import { createSlice } from '@reduxjs/toolkit';
import { getPhotos } from './helpers';

const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    allPhotos: [],
    current: null,
    currentIndex: 0,
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
        current: action.payload.current,
        currentIndex: action.payload.currentIndex,
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
  const currentIndex = photos.findIndex((photo) => photo.id === id);
  dispatch(setCurrentPhoto({ current: photos[currentIndex], currentIndex }));
};

export default photoSlice.reducer;
