import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import versionModeReucer from '../reducers/versionModeReucer';
import weatherDataReducer from '../reducers/weatherDataReducer';

export const store = configureStore({
  reducer: {
    data: weatherDataReducer,
    mode: versionModeReucer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
