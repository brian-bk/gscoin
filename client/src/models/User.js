
/**
 * User model
 * @class
 */
class User {
  
  /**
   * Create a user
   * @param {string} username 
   * @param {boolean} isLoggedIn 
   * @returns {User}
   */
  constructor(username, isLoggedIn=false) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
  }

  /**
   * Create a user from raw json
   * @param {object} rawJson 
   * @returns {User}
   */
  static from(rawJson) {
    return new User(
      rawJson.username,
      rawJson.username ? true : false
    );
  }

}

export default User;
