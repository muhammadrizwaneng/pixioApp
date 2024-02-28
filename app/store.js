import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../app/features/userSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if you have any
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // Ignore some actions for serialization
  blacklist: ['register'], // Exclude 'register' action from serialization
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
