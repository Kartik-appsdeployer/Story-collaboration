import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice';
import storyReducer from './storySlice/storySlice';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'


const userConfig = {
    key: 'user',
    storage: storageSession,
}
const storyConfig = {
    key: 'story',
    storage: storageSession,
}

export default combineReducers({
    userRoot: persistReducer(userConfig, userReducer),
    storyRoot: persistReducer(storyConfig, storyReducer),
});