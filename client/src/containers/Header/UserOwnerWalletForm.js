import { connect } from 'react-redux';

import WalletForm from '../../components/Header/WalletForm';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    wallet: state.ownedWallet.wallet,
  };
};

const UserOwnerWalletForm = connect(mapStateToProps, undefined)(WalletForm);

export default UserOwnerWalletForm;
