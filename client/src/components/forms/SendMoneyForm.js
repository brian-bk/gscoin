import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

import TransactionApi from '../../api/TransactionApi';
import Wallet from '../../models/Wallet';
import WalletApi from '../../api/WalletApi';


class SendMoneyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetWallet: undefined,
      isFetchingTargetWallet: true,
      amount: '',
      isSubmitting: false,
      redirectTransactionId: undefined,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const targetWalletId = parseInt(queryString.parse(window.location.search)['target_wallet_id'], 10);
    WalletApi.getWallet(targetWalletId)
      .then(rawJson => {
        this.setState({
          targetWallet: Wallet.from(rawJson),
          isFetchingTargetWallet: false,
        });
      }).catch(error => {
        this.setState({
          isFetchingTargetWallet: false,
        });
        throw(error);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    TransactionApi.createTransaction({
      amount: parseInt(this.state.amount, 10),
      source_wallet_id: parseInt(this.props.sourceWallet.id, 10),
      target_wallet_id: parseInt(this.state.targetWallet.id, 10)
    })
      .then(rawJson => {
        this.setState({
          redirectTransactionId: rawJson.id,
          isSubmitting: false,
        });
        this.props.loadOwnedWallet();
      }).catch(error => {
        this.setState({ isSubmitting: false });
        throw(error);
      });
  }

  render() {
    const { transactionsUrl } = this.props;
    const { redirectTransactionId } = this.state;
    if(redirectTransactionId) {
      return <Redirect to={`${transactionsUrl}/${redirectTransactionId}`} />;
    }
    const { sourceWallet } = this.props;
    const { amount, isFetchingTargetWallet, isSubmitting, targetWallet } = this.state;
    return (
      <form id="SendMoneyForm" onSubmit={this.handleSubmit}>
        <label hidden>
          Source Wallet
          <input
            name="sourceWalletId"
            value={sourceWallet && sourceWallet.id ? sourceWallet.id : ''}
            readOnly
          />
        </label>
        <label>
          Send money to: {targetWallet &&
            targetWallet.owner &&
            targetWallet.owner.username}
          <input
            readOnly
            name="targetWalletId"
            type="number"
            value={targetWallet && targetWallet.id ? targetWallet.id : ''}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Amount
          <input
            name="amount"
            type="number"
            value={amount ? amount : ''}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Send Money" disabled={
          isFetchingTargetWallet || isSubmitting ||
          !(sourceWallet && sourceWallet.id) ||
          !(targetWallet && targetWallet.id)
        } />
      </form>
    );
  }
}

SendMoneyForm.propTypes = {
  loadOwnedWallet: PropTypes.func.isRequired,
  sourceWallet: PropTypes.object.isRequired,
  transactionsUrl: PropTypes.string.isRequired,
};

export default SendMoneyForm;
