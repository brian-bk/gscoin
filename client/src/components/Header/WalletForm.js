import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as MaterialDesign from 'react-icons/lib/md';

const WalletForm = ({ user, wallet }) => (
  <form id="WalletForm" className="form-inline" hidden={!user || !user.isLoggedIn}>
    {wallet && typeof(wallet.balance) === 'number' ?
      <Link className="nav-link" to={`/wallets/${wallet.id}`}>
        <button className="btn btn-outline-info">
          <MaterialDesign.MdAccountBalanceWallet />
          &nbsp;
          <span>{`${wallet.balance}`}</span>
          &thinsp;
          <span className="small text-muted">GSC</span>
        </button>
      </Link>
      : <Link className="nav-link" to="/wallets/create">
        <button className="btn btn-outline-info">
          <MaterialDesign.MdAccountBalanceWallet />
          &nbsp;
          {'Create Wallet'}
        </button>
      </Link>
    }
  </form>
);

WalletForm.propTypes = {
  user: PropTypes.object.isRequired,
  wallet: PropTypes.object.isRequired,
};

export default WalletForm;
