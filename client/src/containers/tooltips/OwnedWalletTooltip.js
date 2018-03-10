import { connect } from 'react-redux';

import WalletTooltip from '../../components/tooltips/WalletTooltip';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    wallet: state.ownedWallet.wallet
  };
};

const OwnedWalletTooltip = connect(mapStateToProps, undefined)(WalletTooltip);

export default OwnedWalletTooltip;
