import React from 'react';
import PropTypes from 'prop-types';

import PersonalNav from '../../containers/Header/PersonalNav';

const Header = ({ pageUrl }) => (
  <div className="bg-light">
    <PersonalNav pageUrl={pageUrl} />
  </div>
);

Header.propTypes = {
  pageUrl: PropTypes.string.isRequired,
};

export default Header;