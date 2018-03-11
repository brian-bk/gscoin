import * as types from './actionTypes';
import User from '../models/User';
import UserApi from '../api/UserApi';

const loadAuthUserSuccess = user => (
  {type: types.LOAD_AUTH_USER_SUCCESS, user}
);

const loadAuthUserFailure = () => (
  {type: types.LOAD_AUTH_USER_FAILURE}
);

/**
 * Load authenticated user and on fetch return update redux state
 * @return {Promise} Authenticated user promise
 */
export const loadAuthUser = () => dispatch => UserApi.getAuthUser()
  .then(rawJson => {
    dispatch(loadAuthUserSuccess(User.from(rawJson)));
  }).catch(error => {
    dispatch(loadAuthUserFailure());
    throw(error);
  });
