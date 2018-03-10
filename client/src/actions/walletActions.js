import Wallet from '../models/Wallet';
import WalletApi from '../api/WalletApi';
import * as types from './actionTypes';

function loadOwnedWalletSuccess(wallet) {
  return {type: types.LOAD_OWNED_WALLET_SUCCESS, wallet};
}

function loadOwnedWalletFailure() {
  return {type: types.LOAD_OWNED_WALLET_FAILURE};
}

export function loadOwnedWallet() {
  return (dispatch) => {
    // const prevState = getState();
    return WalletApi.getOwnedWallet()
      .then(rawJson => {
        dispatch(loadOwnedWalletSuccess(Wallet.from(rawJson)));
      }).catch(error => {
        dispatch(loadOwnedWalletFailure());
        throw(error);
      });
  };
}
