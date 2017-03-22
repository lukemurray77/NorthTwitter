import * as types from '../actions/types';

const initialState = {
    trendsData : {},
    loadingTrendsData: true,
    error: null
};

function getTrendsDataReducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_TRENDS_REQUEST: {
            return Object.assign({}, prevState, {
                loadingTrendsData: true,
                error: null
            });
        }
        case types.FETCH_TRENDS_SUCCESS: {
            return Object.assign({}, prevState, {
                trendsData: action.data,
                loadingTrendsData: false,
                error: null
            });
        }
        case types.FETCH_TRENDS_ERROR: {
            return Object.assign({}, prevState, {
                loadingTrendsData: false,
                error: action.data
            });
        }
        default:
            return prevState;
    }
}

export default getTrendsDataReducer;