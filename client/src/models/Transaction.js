import moment from 'moment';

import Wallet from './Wallet';

class Transaction {
  constructor(id, sourceWallet, targetWallet, timestamp, amount) {
    this.id = id;
    this.sourceWallet = sourceWallet;
    this.targetWallet = targetWallet;
    this.timestamp = timestamp;
    this.amount = amount;
  }
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
