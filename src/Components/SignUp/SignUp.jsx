import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createPosts } from "../../Redux/Actions/UserActions";
import { createPostsApiCall } from "../../Redux/Actions/UserActions";
import { connect } from "react-redux";
import "./SignUp.css";
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: { name: "", email: "", designation: "", contact: "", address: "" },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const temp = e.target.value.trim();
    console.log("name ", e.target.name);
    console.log("val ", temp);
    this.setState({
      ...this.state,
      User: { ...this.state.User, [e.target.name]: temp },
    });
  };

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    
    const { name, email, designation, contact , address } = this.state.User;
    if (name  && email && designation && contact && address) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 1000);
      this.props.createPosts(this.state.User);
      this.props.createPostsApiCall(this.state.User.email);
      localStorage.setItem("user",JSON.stringify(this.state.User))
    }
    
    
  };
  render() {
    return (
      <div>
        <div id="signUp">
          <form name="form-signUp" onSubmit={this.handleSignUpSubmit}>
            <h3>User Sign-up </h3>
            <div
              className={
                "flex" +
                (this.state.submitted && !this.state.User.name
                  ? " has-error"
                  : "")
              }
            >
              <p className="fa fa-user"></p>
              <input
                type="text"
                id="user"
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
              />
              {this.state.submitted && !this.state.User.name && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Name required !"
                ></i>
              )}
            </div>
            <div
              className={
                "flex" +
                (this.state.submitted && !this.state.User.email
                  ? " has-error"
                  : "")
              }
            >
              <p className="fa fa-envelope"></p>
              <input
                type="email"
                id="user"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
              {this.state.submitted && !this.state.User.email && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Email required !"
                ></i>
              )}
            </div>

            <div
              className={
                "flex" +
                (this.state.submitted && !this.state.User.designation
                  ? " has-error"
                  : "")
              }
            >
              <p className="fa fa-users"></p>
              <input
                type="text"
                placeholder="Designation"
                name="designation"
                onChange={this.handleChange}
              />
              {this.state.submitted && !this.state.User.designation && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Designation required !"
                ></i>
              )}
            </div>
            <div
              className={
                "flex" +
                (this.state.submitted && !this.state.User.contact
                  ? " has-error"
                  : "")
              }
            >
              <p className="fa fa-phone"></p>
              <input
                type="text"
                placeholder="contact"
                name="contact"
                onChange={this.handleChange}
              />
              {this.state.submitted && !this.state.User.contact && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Contact required !"
                ></i>
              )}
            </div>
            <div className={
                "flex" +
                (this.state.submitted && !this.state.User.address
                  ? " has-error"
                  : "")
              }>
              <p className="fa fa-map-marker"></p>
              <textarea
                type="text"
                placeholder="Address"
                name="address"
                onChange={this.handleChange}
              />
               {this.state.submitted && !this.state.User.address && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Address required !"
                ></i>
              )}
            </div>
            <input type="submit" value="Sign up" />

            <Link to="/" type="button" className="btn-login">
              {" "}
              Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPosts: (user) => dispatch(createPosts(user)),
    createPostsApiCall: (email) => dispatch(createPostsApiCall(email))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
