import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';

import userProfileReducer from './reducers/userProfileReducer';
import userProfile from './reducers/userProfile';
import menu from './reducers/menu';

// export const reduxStore = configureStore({ reducer: userProfileReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
const allReducers = combineReducers({
    userProfile,
    menu
});

export const reduxStore = configureStore({ reducer: allReducers });
