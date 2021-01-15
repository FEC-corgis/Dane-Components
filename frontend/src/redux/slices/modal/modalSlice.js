import { createSlice } from '@reduxjs/toolkit';
import { setCurrentPhoto } from '../photos/PhotoSlice';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    showPopup: true,
  },
  reducers: {
    setShowModal: (state, action) => {
      return {
        ...state,
        showModal: action.payload,
      };
    },
    setShowPopup: (state, action) => {
      return {
        ...state,
        showPopup: action.payload,
      };
    },
  },
});

export const { setShowModal, setShowPopup } = modalSlice.actions;
export const getModalState = (state) => state.modal;

export const handleTransition = (photo) => (dispatch) => {
  dispatch(setShowPopup(false));

  setTimeout(() => {
    dispatch(setCurrentPhoto(photo));
    dispatch(setShowPopup(true));
  }, 150);
};

export default modalSlice.reducer;
