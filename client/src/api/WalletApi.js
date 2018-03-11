import { getHeaders, getJson, successStatus, typeError } from './apiUtil';

/**
 * Wallet fetch requests
 * @class
 */
class WalletApi {

  /**
   * Get authenticated user's wallet
   * @method
   * @returns {Promise} Response json data
   */
  static getOwnedWallet() {
    return fetch('/api/coin/wallet/',
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
   * Create wallet
   * @method
   * @returns {Promise} Response json data
   */
  static createWallet() {
    return fetch('/api/coin/wallets/',
      {
        method: 'POST',
        credentials: 'include',
        headers: getHeaders()
      }
    )
      .then(successStatus)
      .then(getJson);

  }

  /**
   * Retrieve wallet
   * @method
   * @param {number} walletId
   * @returns {Promise} Response json data
   */
  static getWallet(walletId) {
    if(typeof walletId !== 'number') {
      return typeError('walletId must be a number');
    }
    return fetch(`/api/coin/wallets/${walletId.toString()}`,
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
   * Get wallets
   * @method
   * @returns {Promise} Response json data
   */
  static getWallets() {
    return fetch('/api/coin/wallets/',
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

export default WalletApi;
