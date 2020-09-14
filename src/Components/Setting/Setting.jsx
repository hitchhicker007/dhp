import React, { Component } from "react";
import NavHorizontal from "../Navbar/Horizontal/NavHorizontal";
import axios from "axios";
import '../Dashboard/AddCategory.css'
class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      category : {
      "CategoryName": "",
      "CategoryImage": "",
      "submitted": false,
      "MaxAmount": "",
      "UserId": 0,
      "id": 0
      }
    };
  }
  componentDidMount() {
    const Category_URL = "http://localhost:3006/Category";
    var uid = JSON.parse(localStorage.getItem("user"));
    var url = Category_URL + "?UserId=" + uid[0].id;
    axios.get(url).then((res) => {
      const resp = res.data;
      this.setState({ data: resp }, function () {});
    });
  }

  Delete = (id) => {
    const Category_URL = "http://localhost:3006/Category";
    axios.delete(Category_URL + "/" + id)
    .then(res => console.log(res.data));
    
    this.componentDidMount();
    var uid = JSON.parse(localStorage.getItem("user"));
    var url = Category_URL + "?UserId=" + uid[0].id;
    axios.get(url).then((res) => {
        const resp = res.data;
        this.setState({ data: resp }, function () {});
      });
      setTimeout(function() { alert("Category deleted successfully"); }, 500);
    //   alert("Category deleted successfully !!")
  }

  handleMaxAmountChange = (e) => {
   this.setState({
     category:{MaxAmount : e.target.value}
   })
  };
 

  Edit = (id,category) => {
    category.MaxAmount = this.state.category.MaxAmount;
    const Category_URL = "http://localhost:3006/Category";

    axios.put(Category_URL + "/" + id, category)
    .then(res => console.log(res.data));

    this.componentDidMount();
    var uid = JSON.parse(localStorage.getItem("user"));
    var url = Category_URL + "?UserId=" + uid[0].id;
    axios.get(url).then((res) => {
        const resp = res.data;
        this.setState({ data: resp }, function () {});
      });
      setTimeout(function() { alert("Category Edited successfully"); }, 500);
    //   alert("Category deleted successfully !!")
  }



  AllCategory() {
    if (this.state.data) {
      return this.state.data.map((category, index) => {
        return (
        
          <tr className="table-active" key={index}>
            <th scope="row">
            <img
                src={category.CategoryImage}
                alt="not found"
                className="CategoryImage"
              />
            </th>
            <td>{category.CategoryName}</td>
            <td>
                <input type="number" min="0" max="100000" defaultValue={category.MaxAmount} onChange={this.handleMaxAmountChange}/>
            </td>
            <td>
        <button className="btn btn-default" onClick={() => this.Edit(category.id,category)}><i className="fa fa-edit"></i>{" "}Edit</button> 
        <button  className="btn btn-default"  onClick={() => this.Delete(category.id)}> <i className="fa fa-trash"></i>{" "}Delete</button> </td>
          </tr>
        );
      });
    } else {
      return [];
    }
  }

  render() {
    return (
      <div>
        <NavHorizontal />
        <div className="container p-5">
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Column heading</th>
                  <th scope="col">Column heading</th>
                  <th scope="col">Column heading</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr class="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr> */}
                {this.AllCategory()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Setting;
