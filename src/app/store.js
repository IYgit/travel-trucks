import { configureStore } from '@reduxjs/toolkit';
import campersReducer from '../features/campers/campersSlice';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});
