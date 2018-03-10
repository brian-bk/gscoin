import { getHeaders, getJson, successStatus, typeError } from './apiUtil';

class WalletApi {
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
  static getWallet(walletId) {
    if(typeof walletId === 'number') {
      return fetch(`/api/coin/wallets/${walletId.toString()}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: getHeaders()
        }
      )
        .then(successStatus)
        .then(getJson);
    } else {
      return typeError('walletId must be a number');
    }
  }
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
