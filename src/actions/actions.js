import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchUserData () {
    return function (dispatch) {
        dispatch(fetchUserDataRequest());
        axios
            .get('https://protected-oasis-31937.herokuapp.com/tweets/northcoders')
            .then (res => {
                dispatch(fetchUserDataSuccess(res.data.tweetData[0].user));
            })
            .catch(err => {
                dispatch(fetchUserDataError(err));
            });
    };
}

export function fetchUserDataRequest () {
    return {
        type: types.FETCH_USERDATA_REQUEST,
    };
}

export function fetchUserDataSuccess (userData) {
    return {
        type: types.FETCH_USERDATA_SUCCESS,
        data: userData

    };
}
export function fetchUserDataError (err) {
    return {
        type: types.FETCH_USERDATA_ERROR,
        data: err
    };
}

export function fetchTrendsData () {
    return function (dispatch) {
        dispatch(fetchTrendsDataRequest());
        axios
            .get('https://protected-oasis-31937.herokuapp.com/trends')
            .then (res => {
                dispatch(fetchTrendsDataSuccess(res.data.tweetData.trends[0].trends));
            })
            .catch(err => {
                dispatch(fetchTrendsDataError(err));
            });
    };
}

export function fetchTrendsDataRequest () {
    return {
        type: types.FETCH_TRENDS_REQUEST,
    };
}

export function fetchTrendsDataSuccess (TrendsData) {
    return {
        type: types.FETCH_TRENDS_SUCCESS,
        data: TrendsData

    };
}
export function fetchTrendsDataError (err) {
    return {
        type: types.FETCH_TRENDS_ERROR,
        data: err
    };
}