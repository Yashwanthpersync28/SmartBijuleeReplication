import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiManager } from "../../ApiManager";
import { dummyApi } from "../../../Constants";


export const eventlistApi= createAsyncThunk(dummyApi,
    async (data, {getState,rejectWithValue, dispatch}) => {
        // console.log("getstate", getState().auth)
        console.log("amsdbcasdhcbasdjhvbasdv")
      
        const request = {
            method: "get",
            url: dummyApi,
        };
        try{
            // const res = await ApiManager({}, request)
            console.log("kjsbvaskjdhbcvaskdvbcaksjd", getState().at)
            console.log("getstddddate", getState().auth.at)
            // const res = await dispatch(ApiManager(getState().auth.setToken.at, request));
            const res = await dispatch(ApiManager(getState().auth.at, request));
            console.log("sfkjhbaskdjchbasdkjchbadskcjbhasdjac", res)
            return res
        } catch(error){
            console.log("error in punch in api", error)
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})