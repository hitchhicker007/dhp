import React, { Component } from "react";
import "./Login.css";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { getPosts } from "../../Redux/Actions/UserActions";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      username: "",
      password: "",
      submitted: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps user ",nextProps)
    if (nextProps.getposts !== this.props.getposts) {
      const postsarray = nextProps.getposts;
      this.setState({
        data: postsarray,
      });
    }
  }
  componentDidMount() {
    this.props.getPosts();
  }
  googleResponse = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

isEmpty= (obj) =>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });

    var users = this.props.getposts;
   // console.log("Users : ", users);
    const { username, password } = this.state;

    if (username && password) {

      var loggedInUser = users.filter((user) => {
        return user.email === username;
      });

      //console.log("ss",loggedin)
      
      if (this.isEmpty(loggedInUser)) {
        alert("Username or password is not valid")
      }
      else
      {
        alert("Login successful...")
        localStorage.setItem("user",JSON.stringify(loggedInUser))
        setTimeout(() => {
          this.props.history.push("Dashboard");
        }, 1000);
      }
    }
  };
  render() {
    return (
      <div>
        <div id="login">
          <GoogleLogin
            clientId="940839968852-fm1t56cr9b2kec6e64ciqrmqo2brpdh0.apps.googleusercontent.com"
            buttonText="Sign in with google"
            onSuccess={this.googleResponse}
            onFailure={this.googleResponse}
            cookiePolicy={"single_host_origin"}
            className="GoogleLoginbtn"
          />
          <form name="form-login" onSubmit={this.handleLoginSubmit}>
            <h3>User Login </h3>

            <div
              className={
                "flex" +
                (this.state.submitted && !this.state.username
                  ? " has-error"
                  : "")
              }
            >
              <p className="fa fa-user"></p>
              <input
                type="email"
                id="user"
                placeholder="Username"
                name="username"
                onChange={this.handleChange}
              />
              {this.state.submitted && !this.state.username && (
                <i
                  className="fa fa-exclamation-circle req-error pt-3 pl-1"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Username required !"
                  
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
            <input type="submit" value="Login" />
            <Link to="SignUp" type="button" className="btn-signup">
              {" "}
              Sign Up
            </Link>
          </form>
      
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getposts: state.user.data,
});

const mapDispatchToProps = {
  getPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//export default Login;
