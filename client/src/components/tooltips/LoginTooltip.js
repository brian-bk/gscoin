import React from 'react';
import PropTypes from 'prop-types';

const LoginTooltip = ({ user }) => (
  user && !user.anonymous ?
    <span className="form-inline" id="LoginTooltip">
      {'Logged in as '}<i>{user.username}</i>&nbsp;<a href="/auth/logout/">Logout</a>
    </span>
    : <span className="navbar-text">
      <a href={`/auth/login?next=${window.location.pathname}`}>{'Login'}</a>
    </span>
);

LoginTooltip.propTypes = {
  user: PropTypes.object.isRequired,
};

export default LoginTooltip;
