import { createSlice } from "@reduxjs/toolkit";

const token = createSlice({
    name: "setTokenReducer",
    initialState: {
        at: "",
    },
    reducers: {
        setToken(state, action) {
            state.at = action.payload
        }
    }
})
export const { setToken } = token.actions
export const setTokenReducer =  token.reducer