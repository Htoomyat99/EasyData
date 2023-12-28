import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
    editData: (state, action) => {
      const {id, editedData} = action.payload;
      const index = state.findIndex(data => data.id === id);
      if (index !== -1) {
        state[index] = editedData;
      }
    },
  },
});

export const {addData, editData} = dataSlice.actions;

export default dataSlice.reducer;
