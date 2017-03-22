import {combineReducers} from 'redux';

import getUserDataReducer from './getUserDataReducer';
import getTrendsDataReducer from './getTrendsDataReducer';

export default combineReducers({
    userData: getUserDataReducer,
    trendData: getTrendsDataReducer
});