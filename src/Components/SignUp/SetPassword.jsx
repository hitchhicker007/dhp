import React, { Component } from "react";
import "./SetPassword.css";
class SetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      submitted: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div id="login">
          <form name="form-login" onSubmit={this.handleLoginSubmit}>
            <h3>Set Password </h3>

            <div
              className={
                "flex" +
                (this.state.submitted && !this.state.password
                  ? " has-error"
                  : "")
              }
            >
              <p className="fa fa-lock"></p>
              <input
                type="password"
                id="pass"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
              {this.state.submitted && !this.state.password && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Password required !"
                ></i>
              )}
            </div>
            <div
              className={
                "flex" +
                (this.state.submitted && !this.state.password
                  ? " has-error"
                  : "")
              }
            >
              <p className="fa fa-lock"></p>
              <input
                type="password"
                id="pass"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
              {this.state.submitted && !this.state.password && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Password required !"
                ></i>
              )}
            </div>
            <input type="submit" value="Set Password" />
          </form>
        </div>
      </div>
    );
  }
}

export default SetPassword;
