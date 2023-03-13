import { createSlice } from '@reduxjs/toolkit';

// ** reducers has the set of actions that we can perform on the elements present inside a slice.
const numberSlice = createSlice({
  name: "numbers",
  initialState: [],
  reducers: {
    addNumber(state, action) {},
    removeNumber(state, action) {},
    removeAllNumbers(state, action) {},
  },
});

export default numberSlice.reducer;





