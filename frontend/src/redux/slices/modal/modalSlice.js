import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    setShowModal: (state, action) => action.payload,
  },
});

export const { setShowModal } = modalSlice.actions;
export const getModalState = (state) => state.modal;

export default modalSlice.reducer;
