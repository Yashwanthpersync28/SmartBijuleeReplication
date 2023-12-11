import { combineReducers } from '@reduxjs/toolkit';
// import { systemReducer } from './systemReducer';
import { systemReducer } from './SystemReducer';

export const reducer = combineReducers({
    system: systemReducer,
})