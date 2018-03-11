import { getHeaders, getJson, successStatus, typeError } from './apiUtil';

/**
 * Transaction requests related to /transactions/?(:id)
 * @class
 */
class TransactionApi {

  /**
   * Get transaction from id
   * @param {number} transactionId 
   * @method
   * @returns {Promise} Response json data
   */
  static getTransaction(transactionId) {
    if(typeof transactionId !== 'number') {
      return typeError('transactionId must be a number');
    }
    return fetch(`/api/coin/transactions/${transactionId.toString()}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders()
      }
    )
      .then(successStatus)
      .then(getJson);
  }

  /**
   * Create transaction
   * @param {number} sourceWalletId
   * @param {number} targetWalletId
   * @param {number} amount
   * @method
   * @returns {Promise} Response json data
   */
  static createTransaction(sourceWalletId, targetWalletId, amount) {
    if(typeof(sourceWalletId) !== 'number' ||
        typeof(targetWalletId) !== 'number' ||
        typeof(amount) !== 'number') {
      return typeError('transaction amout and ids must be numbers');
    }
    const transaction = {
      source_wallet_id: sourceWalletId,
      target_wallet_id: targetWalletId,
      amount: amount
    };
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
  }

  /**
   * Get transactions
   * @method
   * @returns {Promise} Response json data
   */
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
