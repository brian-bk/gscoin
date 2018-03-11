import Wallet from '../models/Wallet';
import WalletApi from '../api/WalletApi';
import * as types from './actionTypes';

const loadOwnedWalletSuccess = wallet => (
  {type: types.LOAD_OWNED_WALLET_SUCCESS, wallet}
);

const loadOwnedWalletFailure = () => (
  {type: types.LOAD_OWNED_WALLET_FAILURE}
);

/**
 * Load authenticated user's wallet and on fetch return update redux state
 * @return {Promise} Owner's wallet promise
 */
export const loadOwnedWallet = () => dispatch => WalletApi.getOwnedWallet()
  .then(rawJson => {
    dispatch(loadOwnedWalletSuccess(Wallet.from(rawJson)));
  }).catch(error => {
    dispatch(loadOwnedWalletFailure());
    throw(error);
  });
