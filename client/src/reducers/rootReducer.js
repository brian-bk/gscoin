import { combineReducers } from 'redux';

import auth from './authReducer';
import ownedWallet from './ownedWalletReducer';

const rootReducer = combineReducers({
  auth,
  ownedWallet,
});

export default rootReducer;
