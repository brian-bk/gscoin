import * as types from './actionTypes';
import User from '../models/User';
import UserApi from '../api/UserApi';

function loadAuthUserSuccess(user) {
  return {type: types.LOAD_AUTH_USER_SUCCESS, user};
}

function loadAuthUserFailure() {
  return {type: types.LOAD_AUTH_USER_FAILURE};
}

export function loadAuthUser() {
  return (dispatch) => {
    // const prevState = getState();
    return UserApi.getAuthUser()
      .then(rawJson => {
        dispatch(loadAuthUserSuccess(User.from(rawJson)));
      }).catch(error => {
        dispatch(loadAuthUserFailure());
        throw(error);
      });
  };
}
