import User from '../models/User';
import Wallet from '../models/Wallet';

export default {
  auth: {
    user: new User(),
    isFetching: false
  },
  ownedWallet: {
    wallet: new Wallet(),
    isFetching: false,
  },
};
