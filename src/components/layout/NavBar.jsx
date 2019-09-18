import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks.jsx';
import SignOutLinks from './SignOutLinks.jsx';
import { connect } from 'react-redux';
const NavBar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignInLinks /> : <SignOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Dash
        </Link>
        {links}
        {/* <SignInLinks />
        <SignOutLinks /> */}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  //   console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(NavBar);
