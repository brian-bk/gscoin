import { connect } from 'react-redux';

import AuthForm from '../../components/Header/AuthForm';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

const OwnedAuthForm = connect(mapStateToProps, undefined)(AuthForm);

export default OwnedAuthForm;
