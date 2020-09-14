import React, { Component } from "react";
import NavHorizontal from "../Navbar/Horizontal/NavHorizontal";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";
import "./Dashboard.css";
import Expence from "./Expence";
import Welcome from "./Welcome";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      showExpense : false,
      categoryId:0,
      maxAmount:0
    };
    this.showExpenses = this.showExpenses.bind(this);
  }
  setModalShow = (bool) => {
    this.setState({
      modalShow: bool,
    });
  }; 

showExpenses = (expensestatus, Id,maxAmount) => {
    console.log("STATUS ::::::", expensestatus," ::::", Id)
    this.setState({
        showExpense : expensestatus,
        categoryId : Id,
        maxAmount:maxAmount
    }, function () {
      console.log(this.state);
  });
    // console.log("%%Status ", this.state);
  }
  render() {
    return (
      <div className="container-fluied">
        <NavHorizontal />
        <div className="row m-0 p-0">
          <div className="col-md-3">
            <CategoryList showExpenses={this.showExpenses}/>
          </div>
          <div className="col-md-9 p-0">
            <div className="breadcrumb-width">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a onClick={this.setModalShow.bind(null, true)}>
                    <i className="fa fa-plus-circle fa-2x"></i>{" "}
                    <span>{"  "} Add Category</span>
                  </a>
                </li>
              </ol>
            </div>
            {this.state.modalShow && (
              <AddCategory
                show={this.state.modalShow}
                onHide={this.setModalShow.bind(null, false)}
              />
            )}
              {
                (this.state.showExpense)
                  ?
                  <Expence categoryId={this.state.categoryId} maxAmount={this.state.maxAmount}/>
                  :
                  <Welcome />
              }
          </div>
        

        </div>
      </div>
    );
  }
}
