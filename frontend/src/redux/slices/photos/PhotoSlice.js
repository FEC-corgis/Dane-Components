import { createSlice } from '@reduxjs/toolkit';
import { getPhotos } from './helpers';

const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    allPhotos: [],
    current: null,
    currentIndex: 0,
    groups: [],
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
    setGroups: (state, action) => {
      return {
        ...state,
        groups: action.payload,
      };
    },
  },
});

export const { setPhotos, setCurrentPhoto, setGroups } = photoSlice.actions;
export const getPhotoState = (state) => state.photos;

export const handleGetPhotos = () => async (dispatch) => {
  try {
    const photos = await getPhotos();
    dispatch(setPhotos(photos));
    dispatch(setCurrentPhoto({ current: photos[0], currentIndex: 0 }));
  } catch (error) {
    console.log('ERROR IN PHOTO SLICE');
  }
};

export const handleFindCurrent = (photos, id) => (dispatch) => {
  const currentIndex = photos.findIndex((photo) => photo.id === id);
  dispatch(setCurrentPhoto({ current: photos[currentIndex], currentIndex }));
};

export const handleGroupPhotos = (photos) => (dispatch) => {
  const groups = [];
  for (let i = 0; i < photos.length; i += 3) {
    groups.push({
      big: photos[i],
      left: photos[i + 1],
      right: photos[i + 2],
    });
  }
  dispatch(setGroups(groups));
};

export default photoSlice.reducer;
