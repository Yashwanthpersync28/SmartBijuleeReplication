import { combineReducers } from '@reduxjs/toolkit';
import { dashboardReducer } from './dashBoardReducer';
import { EnergyTipsReducer } from './EnergytipsReducer';
import { FaqReducer } from './FaqReducer';
import { ProfileReducer } from './ProfileReducer';


export const userDetailsReducer = combineReducers({
    dashboardUser:dashboardReducer,
    energyUser:EnergyTipsReducer,
    FAQDetails:FaqReducer,
    Profile:ProfileReducer
})