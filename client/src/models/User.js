class User {
  constructor(username, isLoggedIn=false) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
  }
  static from(rawJson) {
    return new User(
      rawJson.username,
      rawJson.username ? true : false
    );
  }
}

export default User;
