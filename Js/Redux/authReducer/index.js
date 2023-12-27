
import { combineReducers } from '@reduxjs/toolkit';
import { webSocketConnectionReducer } from "./webSocketReducer";
import { userReducer,userVerifyReducer, userchangepasswordReducer } from "./userReducer";

export const authReducer = combineReducers({
    userVerify:userVerifyReducer,
    user:userReducer,
    passwordVerify:userchangepasswordReducer

    // user: otpVerifyReducer,
    // userVerify: userVerifyReducer,
    // webSocket: webSocketConnectionReducer
})