import { createSlice } from "@reduxjs/toolkit";

// ** reducers has the set of actions that we can perform on the elements present inside a slice.
const numberSlice = createSlice({
  name: "numbers",
  initialState: [],
  reducers: {
// ** Here , state means the state present in the context of this Slice. 
    addNumber(state, action) {
      state.push(action.payload);
      console.log("added "+ action.payload);
    },
    removeNumber(state, action) {},
    removeAllNumbers(state, action) {},
  },
});

export default numberSlice.reducer;
export const { addNumber } = numberSlice.actions;  
