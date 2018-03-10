import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wallet from '../../../models/Wallet';
import WalletApi from '../../../api/WalletApi';
import UserWalletTable from '../../../containers/tables/UserWalletTable';

class WalletList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallets: [],
      isFetching: true,
    };
  }

  componentDidMount() {
    WalletApi.getWallets()
      .then(rawJsons => {
        this.setState({
          wallets: rawJsons.map(rawJson => Wallet.from(rawJson)),
          isFetching: false,
        });
      })
      .catch(error => {
        this.setState({
          isFetching: false,
        });
        throw(error);
      });
  }

  render() {
    const { wallets } = this.state;
    return (
      <div id="WalletList">
        <UserWalletTable
          wallets={wallets}
        />
      </div>
    );
  }
}

WalletList.propTypes = {
  walletsUrl: PropTypes.string.isRequired,
};

export default WalletList;
