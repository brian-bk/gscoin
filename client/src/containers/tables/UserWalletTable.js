import { connect } from 'react-redux';

import WalletTable from '../../components/tables/WalletTable';

const mapStateToProps = state => {
  return {
    ownedWallet: state.ownedWallet.wallet
  };
};

const UserWalletTable = connect(mapStateToProps, undefined)(WalletTable);

export default UserWalletTable;
