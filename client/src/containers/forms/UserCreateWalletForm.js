import { connect } from 'react-redux';

import CreateWalletForm from '../../components/forms/CreateWalletForm';
import { loadOwnedWallet } from '../../actions/walletActions';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    wallet: state.ownedWallet.wallet,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadOwnedWallet: () => dispatch(loadOwnedWallet()),
  };
};

const UserCreateWalletForm = connect(mapStateToProps, mapDispatchToProps)(CreateWalletForm);

export default UserCreateWalletForm;
