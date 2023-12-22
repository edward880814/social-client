import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@redux/reducers/user/user.reducer';
import suggesionsReducer from '@redux/reducers/suggestions/suggestions.reducer';
export const store = configureStore({
  reducer: {
    user: userReducer,
    suggestions: suggesionsReducer
  }
});
