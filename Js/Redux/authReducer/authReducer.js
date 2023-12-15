import { createSlice } from '@reduxjs/toolkit';
import { otpVerifyApi } from '../../api/authApi';
import { userotpVerifyApi } from '../../api/authApi/loginApi';

export const userReducer = createSlice({
        name: "AuthReducer",
        initialState: {
            loading: false,
            error: null,
            at: "",
            status: "",
        },
        extraReducers: builder => {
            builder
                .addCase(userotpVerifyApi.pending, (state) => {
                    state.loading = true;
                })
                .addCase(userotpVerifyApi.fulfilled, (state, action) => {
                    console.log("lkjandsvlkjnsfdlvksjdnfvlsdfknvsdf", action)
                    state.loading = false;
                    state.at = action.payload.data.token;
                    state.status = action.payload.status
                })
                .addCase(userotpVerifyApi.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload.data.ErrorDescription;
                    state.status = action.payload.status
                });
        },
    }).reducer