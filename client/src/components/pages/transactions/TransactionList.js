import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Transaction from '../../../models/Transaction';
import TransactionApi from '../../../api/TransactionApi';
import TransactionTable from '../../tables/TransactionTable';

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      isFetchingTransactions: true,
    };
  }

  componentDidMount() {
    TransactionApi.getTransactions()
      .then(rawJsons => {
        this.setState({
          transactions: rawJsons.map(rawJson => Transaction.from(rawJson)),
          isFetchingTransactions: false,
        });
      })
      .catch(error => {
        this.setState({
          isFetchingTransactions: false,
        });
        throw(error);
      });
  }

  render() {
    const { transactionsUrl } = this.props;
    const { transactions } = this.state;
    return (
      <div id="TransactionList">
        <h2>Personal</h2>
        <TransactionTable
          transactions={transactions}
          transactionsUrl={transactionsUrl}
        />
      </div>
    );
  }
}

TransactionList.propTypes = {
  transactionsUrl: PropTypes.string.isRequired,
};

export default TransactionList;
