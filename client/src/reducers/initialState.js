import User from '../models/User';
import Wallet from '../models/Wallet';

export default {
  ownedWallet: {
    wallet: new Wallet(),
    isFetching: false,
  },
  auth: {
    user: new User(),
    isFetching: false
  },
};
