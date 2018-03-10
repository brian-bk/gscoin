import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Table from './Table';

const TransactionTable = ({ transactions, transactionsUrl }) => (
  <Table id="TransactionTable">
    <thead>
      <tr>
        <th scope="col">Source wallet username</th>
        <th scope="col">Target wallet username</th>
        <th scope="col">Amount</th>
        <th scope="col">Transaction Timestamp</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={`transaction-table-row-${transaction.id}`}>
          <td>{transaction.sourceWallet.owner.username}</td>
          <td>{transaction.targetWallet.owner.username}</td>
          <td>{transaction.amount}</td>
          <td>
            <Link to={`${transactionsUrl}/${transaction.id.toString()}`}>{transaction.timestamp.format('LLL')}</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  transactionsUrl: PropTypes.string.isRequired,
};

export default TransactionTable;
