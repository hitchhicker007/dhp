import React, { Component } from "react";
import AddExpense from "./AddExpense";
import axios from "axios";
import "./AddCategory.css";
class Expence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      categoryId: this.props.categoryId,
      maxAmount : this.props.maxAmount
    };
  }
  componentDidMount() {
    const Expense_URL = "http://localhost:3006/Expense";
    var url = Expense_URL + "?CategoryId=" + this.state.categoryId;
    axios.get(url).then((res) => {
      const resp = res.data;
      this.setState({ data: resp }, function () {});
    });
    this.handleUpdate();
  }
  componentWillUpdate(prevProps, prevState) {
    if (prevProps.categoryId !== this.state.categoryId) {
      this.handleUpdate();
    }
  }
  handleUpdate = () => {
    this.setState({
      categoryId: this.props.categoryId,
      maxAmount : this.props.maxAmount
    });
    const Expense_URL = "http://localhost:3006/Expense";
    var url = Expense_URL + "?CategoryId=" + this.props.categoryId;
    axios.get(url).then((res) => {
      const resp = res.data;
      this.setState({ data: resp }, function () {});
    });
  };
  AllExpenses() {
    if (this.state.data) {
      return this.state.data.map((expense, index) => {
        return (
          <div key={index} className="card text-white bg-primary mb-3">
            <div className="card-header"> {expense.ExpenseName}</div>
            <div className="card-body flex">
              <h4 className="card-title">{expense.Amount}</h4>
              <img
                src={expense.ExpenseImage}
                alt="not found"
                className="ExpenseImage"
              />
            </div>
        
          </div>
        );
      });
    } else {
      return [];
    }
  }

 
  render() {
    console.log("@@@DATA EX :::::::", this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              {/* <div className="card text-white bg-primary mb-3">
                <div className="card-header">Header</div>
                <div className="card-body flex">
                  <h4 className="card-title">Primary card title</h4>
                   <img src="sdsd.jps" />
                </div>
                
              </div> */}
              {this.AllExpenses()}
            </div>

            <div className="col-md-5">
              <AddExpense categoryId={this.state.categoryId} afterSave={this.handleUpdate} maxAmount={this.state.maxAmount}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Expence;
