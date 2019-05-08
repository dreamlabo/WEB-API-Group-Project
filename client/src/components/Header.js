import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import PaymentsCharity from "./PaymentsCharity";

import './css/Header.css';
import logo from "./logo2.png";

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false: //no user logged in
        return (
          <li className="nav-item">
            <a className="btn btn-dark" href="/auth/google" role="button">Login With Google</a>
          </li>
        );

      default:
        // the user is logged in
        return [
          <li className="nav-item" key="1">
            <a className="btn btn-primary" href="/surveys/payment" role="button">Add Credits</a>
          </li>,
          <li className="nav-item" key="3" style={{ margin: "0 10px" }}>
            <a className="btn btn-light disabled" tabIndex="-1" role="button" aria-disabled="true">Credits: {this.props.auth.credits}</a>
          </li>,
          <li className="nav-item" key="2">
            <a className="btn btn-dark" href="/api/logout" role="button">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="navbar navbar-expand-lg navbar-light">
          <Link
            to={this.props.auth ? "/surveys" : "/"} // ? == ternary operator (1st arg if true : 2nd arg if false)
            className="navbar-brand"
          >
            <img className="logo" src={logo} alt="onsurveys"/>
          </Link>
          <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
