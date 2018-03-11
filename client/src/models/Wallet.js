import moment from 'moment';

import User from './User';

/**
 * Wallet model
 * @class
 */
class Wallet {

  /**
   * Create a wallet
   * @param {number} id 
   * @param {User} owner 
   * @param {number} balance 
   * @param {Moment} createMoment 
   * @param {Moment} updateMoment 
   */
  constructor(id, owner, balance, createMoment, updateMoment) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    this.createMoment = createMoment;
    this.updateMoment = updateMoment;
  }

  /**
   * Create a wallet from raw json
   * @param {object} rawJson 
   * @returns {Wallet}
   */
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
