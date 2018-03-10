import * as types from '../actions/actionTypes';
import initialState from './initialState';

const ownedWalletReducer = (state=initialState.ownedWallet, action) => {
  switch(action.type) {
  case types.LOAD_OWNED_WALLET_SUCCESS:
    return Object.assign({ }, state, { wallet: action.wallet, isFetching: false });
  case types.LOAD_OWNED_WALLET_FAILURE:
    return Object.assign({ }, state, { wallet: initialState.ownedWallet.wallet, isFetching: false });
  default:
    return state;
  }
};

export default ownedWalletReducer;
