// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Add other reducers here
  },
});

export default store;
