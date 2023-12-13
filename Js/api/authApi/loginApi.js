import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiManager } from '../ApiManager';
import { loginendpoint } from '../../Constants';
import { otpVerifyApi } from '../../Constants';
// - - - - - Verify User API - - - - - //
export const userVerifyApi = createAsyncThunk(loginendpoint,
    async (data, {dispatch,rejectWithValue}) => {
        console.log("adjhbasdvasdv", data)
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
export const userotpVerifyApi = createAsyncThunk(otpVerifyApi,
    async (data, {dispatch, rejectWithValue}) => {
        console.log("dvkchbasdkvjhabsdvkbjashdv", data)
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url: otpVerifyApi,
            body: {...data},
        };

        // const addHeaders = {
        //     "x-app-id" : 4,
        // }
        try{
            const res = await dispatch(ApiManager({}, request,));
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