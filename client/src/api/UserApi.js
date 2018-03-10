import { getHeaders, getJson, successStatus } from './apiUtil';

class UserApi {
  static getAuthUser() {
    return fetch('/api/coin/user/',
      {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders()
      }
    )
      .then(successStatus)
      .then(getJson);
  }
}

export default UserApi;
