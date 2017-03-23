import * as types from '../actions/types';

const initialState = {
    tweets : {},
    loadingTweets: true,
    error: null
};

function getTweetsDataReducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_TWEETS_REQUEST: {
            return Object.assign({}, prevState, {
                loadingTweetsData: true,
                error: null
            });
        }
        case types.FETCH_TWEETS_SUCCESS: {
            return Object.assign({}, prevState, {
                TweetsData: action.data,
                loadingTweets: false,
                error: null
            });
        }
        case types.FETCH_TWEETS_ERROR: {
            return Object.assign({}, prevState, {
                loadingTweets: false,
                error: action.data
            });
        }
        default:
            return prevState;
    }
}

export default getTweetsDataReducer;