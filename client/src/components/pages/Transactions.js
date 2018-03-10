import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import SendMoney from './transactions/SendMoney';
import TransactionDetail from './transactions/TransactionDetail';
import TransactionList from './transactions/TransactionList';

const Transactions = ({ match }) => (
  <div id="Transactions">
    <h1>Transactions</h1>
    <Route exact path={`${match.url}`} render={() =>
      <TransactionList transactionsUrl={match.url} />
    } />
    <Route exact path={`${match.url}/send-money`} render={() => 
      <SendMoney transactionsUrl={match.url} />
    } />
    <Route exact path={`${match.url}/:transactionId`} render={(childProps) => {
      const transactionId = parseInt(childProps.match.params.transactionId, 10);
      return transactionId ?
        <TransactionDetail transactionId={transactionId} />
        : null;
    }} />
  </div> 
);

Transactions.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default Transactions;
