import { getHeaders, getJson, successStatus } from './apiUtil';

/**
 * User fetch requests
 * @class
 */
class UserApi {

  /**
   * Get authenticated user
   * @method
   * @returns {Promise} Response json data
   */
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
