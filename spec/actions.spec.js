import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import {expect} from 'chai';



describe('actions.fetchUserDataRequest', () => {
    it('should return the expected action', () => {
        const action = actions.fetchUserDataRequest();
        expect(action).to.eql({
            type: types.FETCH_USERDATA_REQUEST
        });
    });
});

describe('actions.fetchUserDataSuccess', () => {
    it('should return the expected action', () => {
        const userData = {a: 1};
        const action = actions.fetchUserDataSuccess(userData);
        expect(action).to.eql({
            type: types.FETCH_USERDATA_SUCCESS,
            data: userData
        });
    });
});

describe('actions.fetchUserDataError', () => {
    it('should return the expected action', () => {
        const err = 'im an error';
        const action = actions.fetchUserDataError(err);
        expect(action).to.eql({
            type: types.FETCH_USERDATA_ERROR,
            data: err
        });
    });
});
