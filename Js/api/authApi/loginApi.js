import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiManager } from '../ApiManager';
import { loginendpoint } from '../../Constants';

// - - - - - Verify User API - - - - - //
export const userVerifyApi = createAsyncThunk(loginendpoint,
    async (data, {dispatch,rejectWithValue}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url: loginendpoint,
            body: {...data},
        };
        try{
            const res = await dispatch(ApiManager({},request))
            // const res = await ApiManager({}, request)
            console.log("esresfdgfews",res)
            return res
        } catch  (error){
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return await rejectWithValue(data)
        }   
})
// - - - - - Login User API - - - - - //
export const otpVerifyApi = createAsyncThunk("login",
    async (data, {rejectWithValue, dispatch}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url:  "sales/login",
            body: {...data},
        };

        const addHeaders = {
            "x-app-id" : 4,
        }
        try{
            const res = await dispatch(ApiManager({}, request, addHeaders));
            return res;
        } catch(error){
            console.log("errorororor", error)
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})