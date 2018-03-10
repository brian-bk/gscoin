import moment from 'moment';

import User from './User';

class Wallet {

  constructor(id, owner, balance, createMoment, updateMoment) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    this.createMoment = createMoment;
    this.updateMoment = updateMoment;
  }
  static from(rawJson) {
    return new Wallet(
      parseInt(rawJson.id, 10),
      User.from(rawJson.owner),
      parseInt(rawJson.balance, 10),
      moment(rawJson.create_timestamp),
      moment(rawJson.update_timestamp)
    );
  }
}

export default Wallet;
