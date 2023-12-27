import { createSlice } from '@reduxjs/toolkit';
import { FaqApi } from '../../api/userApi/FaqApi';



export const FaqReducer = createSlice({
    name: "FaqReducer",
    initialState: {
        loading: false,
        error: null,
        data: "",
        status: "",
    },
    extraReducers: builder => {
        builder
            .addCase(FaqApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(FaqApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.status = action.payload.status
                state.error = '';
            })
            .addCase(FaqApi.rejected, (state, action) => {
                console.log('action',action)
                state.data = "";
                state.loading = false;
                state.error = action.payload.status ===400? action.payload.data.errorDescription : action.payload.data.ErrorDescription ;
                state.status = action.payload.status
            });
    },
}).reducer