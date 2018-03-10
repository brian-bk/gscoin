import { connect } from 'react-redux';

import Nav from '../../components/Header/Nav';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    wallet: state.ownedWallet.wallet,
  };
};

const PersonalNav = connect(mapStateToProps, undefined)(Nav);

export default PersonalNav;
