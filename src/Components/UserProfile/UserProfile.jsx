import React, { Component } from "react";
import NavHorizontal from "../Navbar/Horizontal/NavHorizontal";
import "./UserProfile.css";
class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: { name: "", email: "", designation: "", contact: "", address: "" },
    };
  }
  componentDidMount() {
    var user = JSON.parse(localStorage.getItem("user"));

    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        name: user[0].name,
        email: user[0].email,
        designation: user[0].designation,
        contact: user[0].contact,
        address: user[0].address,
      },
    });
  }

  render() {
    // console.log("USER PROFILE", this.state.User);
    return (
      <div>
        <NavHorizontal />
        <div className="container">
          <div className="d-flex justify-content-center pt-5">
            <div>
              <h3> *  Welcome {this.state.User.name}  *</h3>
              <div className="row justify-content-center pt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                  height="100px"
                  width="100px"
                  alt=""
                  className="rounded-circle"
                />
              </div>
              <div className="pt-4">
                <div
                  className="card text-white bg-primary mb-3"
                 >
                  <h4 class="card-header">User Details </h4>
                  <div class="card-body">
                    <h5 class="card-title">Email : {this.state.User.email}</h5>
                    <p class="card-text">
                     Designation : {this.state.User.designation}
                    </p>
                    <p class="card-text">
                     Contact : {this.state.User.contact}
                    </p>
                    <p class="card-text">
                     Address : {this.state.User.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
