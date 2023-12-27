import { createSlice } from '@reduxjs/toolkit';
// import { dashBoardApi } from '../../api/userApi';
import { energyApi } from '../../api/userApi/energyApi';

export const EnergyTipsReducer = createSlice({
    name: "EnergyTipsReducer",
    initialState: {
        loading: false,
        error: null,
        data: "",
        status: "",
    },
    extraReducers: builder => {
        builder
            .addCase(energyApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(energyApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.status = action.payload.status
                state.error = '';
            })
            .addCase(energyApi.rejected, (state, action) => {
                console.log('action',action)
                state.data = "";
                state.loading = false;
                state.error = action.payload.status ===400? action.payload.data.errorDescription : action.payload.data.ErrorDescription ;
                state.status = action.payload.status
            });
    },
}).reducer