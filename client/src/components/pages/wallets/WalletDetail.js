import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wallet from '../../../models/Wallet';
import WalletApi from '../../../api/WalletApi';

class WalletDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: new Wallet(),
      isFetching: true,
    };
  }

  componentDidMount() {
    if(this.props.walletId) {
      WalletApi.getWallet(this.props.walletId)
        .then(rawJson => {
          this.setState({
            wallet: Wallet.from(rawJson),
            isFetching: false,
          });
        })
        .catch(error => {
          this.setState({ isFetching: false });
          throw(error);
        });
    } else {
      this.setState({ isFetching: false });
    }
  }

  render() {
    const { wallet } = this.state;
    return (
      <div id="WalletDetail">
        <h2>
          {'Wallet owned by'}
          &nbsp;
          <i>{wallet && wallet.owner && wallet.owner.username}</i>
        </h2>
        <ul>
          <li><b>{'Balance: '}</b>{
            wallet &&
            wallet.balance}
          </li>
        </ul>
      </div>
    );
  }
}

WalletDetail.propTypes = {
  walletId: PropTypes.number.isRequired,
};

export default WalletDetail;
