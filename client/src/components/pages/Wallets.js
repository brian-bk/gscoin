import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CreateWallet from './wallets/CreateWallet';
import WalletDetail from './wallets/WalletDetail';
import WalletList from './wallets/WalletList';

const Wallets = ({ match }) => (
  <div id="Wallets">
    <h1>Wallets</h1>
    <Route exact path={`${match.url}`} render={() =>
      <WalletList walletsUrl={match.url} />
    } />
    <Route exact path={`${match.url}/create`} render={() => 
      <CreateWallet walletsUrl={match.url} />
    } />
    <Route exact path={`${match.url}/:walletId`} render={(childProps) => {
      const walletId = parseInt(childProps.match.params.walletId, 10);
      return walletId ?
        <WalletDetail walletId={walletId} />
        : null;
    }} />

  </div> 
);

Wallets.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default Wallets;




// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import Wallet from '../../models/Wallet';
// import WalletApi from '../../api/WalletApi';
// import UserWalletTable from '../../containers/tables/UserWalletTable';

// class Wallets extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ownedWallet: undefined,
//       isFetchingOwnedWallet: true,
//       wallets: [],
//       isFetchingWallets: true,
//     };
//   }
//   componentDidMount() {
//     WalletApi.getWallets()
//       .then(rawJsons => {
//         this.setState({
//           wallets: rawJsons.map(rawJson => Wallet.from(rawJson)),
//           isFetchingWallets: false,
//         });
//       }).catch(error => {
//         this.setState({
//           isFetchingWallets: false,
//         });
//         throw(error);
//       });
//   }
//   render() {
//     return (
//       <div id="Wallets">
//         <h1>Wallets</h1>
//         <UserWalletTable
//           sendMoneyUrl={this.props.sendMoneyUrl}
//           wallets={this.state.wallets}
//         />
//       </div>
//     );
//   }
// }

// Wallets.propTypes = {
//   sendMoneyUrl: PropTypes.string.isRequired,
// };

// export default Wallets;

