import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';
const SignInLinks = props => {
  // props.signOut()
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project </NavLink>{' '}
      </li>
      <li>
        <a href="_blank_target" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-2">
          Roni{' '}
        </NavLink>{' '}
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(SignInLinks);
