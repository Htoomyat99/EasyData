import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.value.push(action.payload);
    },
    editData: (state, action) => {
      const {index, newData} = action.payload;
      state[index] = newData;
    },
  },
});

export const {addData, editData} = dataSlice.actions;
export default dataSlice.reducer;
