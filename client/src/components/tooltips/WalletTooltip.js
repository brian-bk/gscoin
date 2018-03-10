import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WalletTooltip extends Component {
  constructor(props) {
    super(props);
    this.toggleWalletTooltip = this.toggleWalletTooltip.bind(this);
  }
  toggleWalletTooltip(event) {
    event.preventDefault();
  }
  render() {
    const { user, wallet } = this.props;
    return (
      <span className="navbar-text" id="WalletTooltip">
        {user && !user.anonymous ?
          wallet && typeof(wallet.balance) === 'number' ?
            <a href="#" onClick={this.toggleWalletTooltip}>{`${wallet.balance}`}</a>
            : <Link to="/wallets/create">{'Create Wallet'}</Link>
          : null}
      </span>
    );
  }
}

// const WalletTooltip = ({ user, wallet }) => (
//   <span id="WalletTooltip">
//     {user && !user.anonymous ?
//       wallet && typeof(wallet.balance) === 'number' ?
//         `Balance: ${wallet.balance}`
//         : <Link to="/wallets/create">{'Create Wallet'}</Link>
//       : null}
//   </span>
// );

WalletTooltip.propTypes = {
  user: PropTypes.object.isRequired,
  wallet: PropTypes.object.isRequired,
};

export default WalletTooltip;
