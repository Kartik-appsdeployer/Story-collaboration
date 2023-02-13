import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice';
import storyReducer from './storySlice/storySlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const CombinedReducers = combineReducers({
  user: userReducer,
  story: storyReducer
})
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, CombinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)