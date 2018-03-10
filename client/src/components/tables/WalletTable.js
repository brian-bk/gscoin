import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Table from './Table';

const WalletTable = ({ ownedWallet, wallets }) => (
  <Table id="WalletTable">
    <thead>
      <tr>
        <th>Username</th>
        <th>Balance</th>
        <th>Wallet Created</th>
        <th>Send Money</th>
      </tr>
    </thead>
    <tbody>
      {wallets.map(wallet => (
        <tr key={`wallet-table-row-${wallet.id}`}>
          <th scope="row">
            <Link to={`/wallets/${wallet.id}`}>{wallet.owner.username}</Link>
          </th>
          <td>{wallet.balance}</td>
          <td>{wallet.createMoment.format('LLL')}</td>
          <td>
            {!(ownedWallet && ownedWallet.id === wallet.id) &&
              <Link to={`/transactions/send-money?target_wallet_id=${encodeURIComponent(wallet.id)}`}>Send Money</Link>
            }
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

WalletTable.propTypes = {
  ownedWallet: PropTypes.object,
  wallets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default WalletTable;
