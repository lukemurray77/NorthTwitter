import * as types from '../actions/types';

const initialState = {
    userData : {},
    loadingUserData: false,
    error: null
};

function getUserDataReducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_USERDATA_REQUEST: {
            return Object.assign({}, prevState, {
                loadingUserData: true,
                error: null
            });
        }
        case types.FETCH_USERDATA_SUCCESS: {
            return Object.assign({}, prevState, {
                userData: action.data,
                loadingUserData: false,
                error: null
            });
        }
        case types.FETCH_USERDATA_ERROR: {
            return Object.assign({}, prevState, {
                loadingUserData: false,
                error: action.data
            });
        }
        default:
            return prevState;
    }
}

export default getUserDataReducer;