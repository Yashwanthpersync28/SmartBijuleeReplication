import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { userReducer } from './authReducer/authReducer';
// import { systemReducer } from './systemReducer';

export const reducer = combineReducers({
    auth: userReducer,
    // system: systemReducer,
})