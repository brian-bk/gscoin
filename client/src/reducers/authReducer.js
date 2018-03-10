import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authReducer = (state=initialState.auth, action) => {
  switch(action.type) {
  case types.LOAD_AUTH_USER_SUCCESS:
    return Object.assign({ }, state, { user: action.user, isFetching: false });
  case types.LOAD_AUTH_USER_FAILURE:
    return Object.assign({ }, state, { user: initialState.auth.user, isFetching: false });
  default:
    return state;
  }
};

export default authReducer;
