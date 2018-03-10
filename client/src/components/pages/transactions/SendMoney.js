import React from 'react';
import PropTypes from 'prop-types';

import OwnerSendMoneyForm from '../../../containers/forms/OwnerSendMoneyForm';

const SendMoney = ({ transactionsUrl }) => (
  <div id="SendMoney">
    <h2>Send Money</h2>
    <OwnerSendMoneyForm transactionsUrl={transactionsUrl} />
  </div>
);

SendMoney.propTypes = {
  transactionsUrl: PropTypes.string.isRequired,
};

export default SendMoney;
