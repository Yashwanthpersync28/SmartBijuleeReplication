import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginendpoint, otpEndPoint, userVerifyEndPoint } from '../../constants';
import { ApiManager } from '../ApiManager';

// import { ApiManager } from '../ApiManager';
ApiManager

// - - - - - Verify User API - - - - - //
export const userVerifyApi = createAsyncThunk(loginendpoint,
    async (data, {rejectWithValue}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url: loginendpoint,
            body: {...data},
        };
        try{
            const res = await ApiManager({}, request)
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
export const otpVerifyApi = createAsyncThunk(loginendpoint,
    async (data, {rejectWithValue}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url: loginendpoint,
            body: {...data},
        };
        try{
            const res = await ApiManager({}, request)
            return res
        } catch(error){
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})