import React, { Component } from "react";
import logo from "../logo.png";
import "./NavHorizontal.css";
import { Link } from "react-router-dom";

export default class NavHorizontal extends Component {
  logOut = () => {
    localStorage.removeItem("user");
  };
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <img src={logo} height="50px"></img>
            <a className="navbar-brand" href="#">
              Expense Management System
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav  navbar-center">
                <li className="nav-item active">
                  <Link className="nav-link" to="Dashboard">
                    <i className="fa fa-dashboard"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="UserProfile">
                    <i className="fa fa-user"></i> UserProfile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Setting">
                    <i className="fa fa-cog"></i> Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Survey">
                    <i className="fa fa-question"></i> Survey
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/" onClick={this.logOut}>
                    <i className="fa fa-sign-out"></i> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav> 
      
      </div>
    );
  }
}
