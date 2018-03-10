import { connect } from 'react-redux';

import SendMoneyForm from '../../components/forms/SendMoneyForm';
import { loadOwnedWallet } from '../../actions/walletActions';

const mapStateToProps = state => {
  return {
    sourceWallet: state.ownedWallet.wallet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadOwnedWallet: () => dispatch(loadOwnedWallet()),
  };
};

const OwnerSendMoneyForm = connect(mapStateToProps, mapDispatchToProps)(SendMoneyForm);

export default OwnerSendMoneyForm;
