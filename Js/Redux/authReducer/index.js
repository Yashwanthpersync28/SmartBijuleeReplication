// import { otpVerifyReducer, userVerifyReducer } from "./loginReducer";
import { combineReducers } from '@reduxjs/toolkit';
import { webSocketConnectionReducer } from "./webSocketReducer";
import { setTokenReducer } from './tokenReaducer';
import { userReducer } from './authReducer';

export const authReducer = combineReducers({
   
    // webSocket: webSocketConnectionReducer,
    // setToken:setTokenReducer,
    auth: userReducer
})