import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Transaction from '../../../models/Transaction';
import TransactionApi from '../../../api/TransactionApi';

/**
 * Show a detailed transaction page
 * @class
 * @extends React.Component
 */
class TransactionDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transaction: new Transaction(),
      isFetching: true,
    };
  }

  /**
   * Get the transaction
   */
  componentDidMount() {
    if(this.props.transactionId) {
      TransactionApi.getTransaction(this.props.transactionId)
        .then(rawJson => {
          this.setState({
            transaction: Transaction.from(rawJson),
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
    const { transaction } = this.state;
    return (
      <div id="TransactionDetail">
        <h2>
          {'Transaction at '}
          <i>
            {transaction &&
              transaction.timestamp &&
              transaction.timestamp.format('LLL')}
          </i>
        </h2>
        <ul>
          <li><b>{'Source Wallet Owner: '}</b>{
            transaction &&
            transaction.sourceWallet &&
            transaction.sourceWallet.owner &&
            transaction.sourceWallet.owner.username}</li>
          <li><b>{'Target Wallet Owner: '}</b>{
            transaction &&
            transaction.targetWallet &&
            transaction.targetWallet.owner &&
            transaction.targetWallet.owner.username}</li>
          <li><b>{'Amount: '}</b>{transaction.amount}</li>
        </ul>
      </div>
    );
  }
}

TransactionDetail.propTypes = {
  transactionId: PropTypes.number.isRequired,
};

export default TransactionDetail;
