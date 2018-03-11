import moment from 'moment';

import Wallet from './Wallet';

/**
 * Transaction model
 * @class
 */
class Transaction {

  /**
   * Create a transaction
   * @param {number} id 
   * @param {Wallet} sourceWallet 
   * @param {Wallet} targetWallet 
   * @param {Moment} timestamp 
   * @param {number} amount 
   * @returns {Transaction}
   */
  constructor(id, sourceWallet, targetWallet, timestamp, amount) {
    this.id = id;
    this.sourceWallet = sourceWallet;
    this.targetWallet = targetWallet;
    this.timestamp = timestamp;
    this.amount = amount;
  }

  /**
   * Get a transaction from raw json
   * @param {object} rawJson 
   * @returns {Transaction}
   */
  static from(rawJson) {
    return new Transaction(
      parseInt(rawJson.id, 10),
      Wallet.from(rawJson.source_wallet),
      Wallet.from(rawJson.target_wallet),
      moment(rawJson.timestamp),
      parseInt(rawJson.amount, 10)
    );
  }

}

export default Transaction;
