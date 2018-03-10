import { getHeaders, getJson, successStatus, typeError } from './apiUtil';

class TransactionApi {
  static getTransaction(transactionId) {
    if(typeof transactionId === 'number') {
      return fetch(`/api/coin/transactions/${transactionId.toString()}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: getHeaders()
        }
      )
        .then(successStatus)
        .then(getJson);
    } else {
      return typeError('transactionId must be a number');
    }
  }
  static createTransaction(transaction) {
    if(typeof(transaction.amount) === 'number' &&
        typeof(transaction.source_wallet_id) === 'number' &&
        typeof(transaction.target_wallet_id) === 'number') {
      return fetch(
        '/api/coin/transactions/',
        {
          body: JSON.stringify(transaction),
          method: 'POST',
          credentials: 'include',
          headers: getHeaders()
        }
      )
        .then(successStatus)
        .then(getJson);
    } else {
      return typeError('transaction amout and ids must be numbers');
    }
  }
  static getTransactions() {
    return fetch(
      '/api/coin/transactions/',
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

export default TransactionApi;
