import React from 'react';
import PropTypes from 'prop-types';
import * as MaterialDesign from 'react-icons/lib/md';

const AuthForm = ({ user }) => (
  user && user.isLoggedIn ?
    <form id="AuthForm" className="form-inline">
      <span className="nav-link">
        <i>{`${user.username}`}</i>
        &thinsp;
        <MaterialDesign.MdAccountCircle />
        &thinsp;
        <a href="/auth/logout/">Logout</a>
      </span>
    </form>
    : <form id="AuthForm" className="form-inline" action="/auth/login/" method="get">
      <span className="nav-link">
        <MaterialDesign.MdAccountCircle />
        &nbsp;
        <a href="/auth/login">Login</a>
      </span>
    </form>
);



AuthForm.propTypes = {

  user: PropTypes.object.isRequired,

};



export default AuthForm;