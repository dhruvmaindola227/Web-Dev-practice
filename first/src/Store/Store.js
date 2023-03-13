import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./Slices/NumberSlice";

// ** This is tied to the NumberSlice.js slice we created because we gave that in the reducer object.
const store = configureStore({
  reducer: {
    numbers: numberSlice,
  },
});

export default store;
