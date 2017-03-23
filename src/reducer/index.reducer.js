import {combineReducers} from 'redux';

import getUserDataReducer from './getUserDataReducer';
import getTrendsDataReducer from './getTrendsDataReducer';
import getTweetsDataReducer from './getTweetsDataReducer';

export default combineReducers({
    userData: getUserDataReducer,
    trendData: getTrendsDataReducer,
    tweetData: getTweetsDataReducer
});