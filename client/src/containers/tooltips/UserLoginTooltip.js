import { connect } from 'react-redux';

import LoginTooltip from '../../components/tooltips/LoginTooltip';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

const UserLoginTooltip = connect(mapStateToProps, undefined)(LoginTooltip);

export default UserLoginTooltip;
