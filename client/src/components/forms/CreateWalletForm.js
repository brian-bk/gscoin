import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import WalletApi from '../../api/WalletApi';

/**
 * Create wallet form presented to user
 * @class
 * @extends React.Component
 */
class CreateWalletForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      redirectWalletId: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handle form submit, if a wallet is created also reload
   * owned wallet and then redirect.
   * @method
   * @param {Proxy} event 
   */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    WalletApi.createWallet()
      .then(response => {
        this.props.loadOwnedWallet();
        this.setState({
          redirectWalletId: response.id,
          isSubmitting: false,
        });
      }).catch(error => {
        this.setState({ isSubmitting: false });
        throw(error);
      });
  }

  render() {
    const { redirectWalletId } = this.state;
    if(redirectWalletId) {
      return <Redirect to={`/wallets/${redirectWalletId}`} />;
    }
    const { user, wallet } = this.props;
    return (
      <form id="CreateWalletForm" onSubmit={this.handleSubmit}>
        <input className="btn btn-primary" type="submit" value="Create Wallet" disabled={
          !user || !user.isLoggedIn ||
          (wallet && typeof(wallet.balance) === 'number')
        } />
      </form>
    );
  }
}

CreateWalletForm.propTypes = {
  loadOwnedWallet: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  wallet: PropTypes.object.isRequired,
};

export default CreateWalletForm;
