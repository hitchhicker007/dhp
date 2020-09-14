import React, { Component } from "react";
import "./AddCategory.css";
import { createExpense } from "../../Redux/Actions/UserActions";
import { connect } from "react-redux";
import axios from "axios";
var remaining = 0;
class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ExpenseName: "",
      ExpenseImage: "",
      submitted: false,
      CategoryId: 0,
      Amount: 0,
    };
    this.calculateRemainingAmount = this.calculateRemainingAmount.bind(this);
  }
  componentDidMount = () => {
    remaining = this.props.maxAmount;
    this.calculateRemainingAmount();
  };
  handleNameChange = (e) => {
    this.setState({
      ExpenseName: e.target.value,
    });
  };
  handleAmountChange = (e) => {
    this.setState({
      Amount: e.target.value,
    });
  };

  handlefilechange = (e) => {
    this.setState({
      ExpenseImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  updateState = () => {
    this.setState(
      {
        submitted: true,
        CategoryId: this.props.categoryId,
      },
      function () {
        console.log(this.state);
      }
    );
    this.state.submitted = true;
    this.state.CategoryId = this.props.categoryId;
  };

  resetState = () => {
    this.calculateRemainingAmount();
    document.getElementById("form").reset();
    this.setState({
      ExpenseName: "",
      ExpenseImage: "",
      submitted: false,
      CategoryId: 0,
      Amount: 0,
    });
  };
  calculateRemainingAmount = () => {
    var temp;
    const Expense_URL = "http://localhost:3006/Expense";
    var url = Expense_URL + "?CategoryId=" + this.props.categoryId;
    axios.get(url).then((res) => {
       temp = res.data;
       var sum = 0;
       if(typeof temp == 'object'){
        temp.forEach(expenses => {
               sum += parseFloat(expenses.Amount);
           });
       }
       remaining = this.props.maxAmount - sum;
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.updateState();

    console.log("STATE $$$$", this.state);
    const { ExpenseName, ExpenseImage, Amount } = this.state;
    if (ExpenseName && ExpenseImage && Amount) {
      this.props.createExpense(this.state);
      //   this.props.onHide();
      alert("Expense added successfully !");
      this.resetState();
      this.calculateRemainingAmount();
      this.props.afterSave(true);
    }
    this.calculateRemainingAmount();
    this.props.afterSave(true);
  };

  render() {
    return (
      <div>
        <div className="card mb-3 addExpensediv">
          <div className="card-header">
            <h4>Add Expense</h4> 
          <p>Remaining Amount : {remaining}</p>
          </div>
         
          <div className="card-body">
            <form onSubmit={this.handleSubmit} id="form">
             
              <div
                className={
                  "form-group flex" +
                  (this.state.submitted && !this.state.ExpenseName
                    ? " has-error"
                    : "")
                }
              >
                <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter expense name"
                  onChange={this.handleNameChange}
                />
                {this.state.submitted && !this.state.ExpenseName && (
                  <i
                    className="fa fa-exclamation-circle req-error pt-3 pl-1"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="ExpenseName required !"
                  ></i>
                )}
              </div>
              <div
                className={
                  "form-group flex" +
                  (this.state.submitted && !this.state.Amount
                    ? " has-error"
                    : "")
                }
              >
                <label>Amount</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter expense Amount"
                  onChange={this.handleAmountChange}
                />
                {this.state.submitted && !this.state.Amount && (
                  <i
                    className="fa fa-exclamation-circle req-error pt-3 pl-1"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Amount required !"
                  ></i>
                )}
              </div>
              <div
                className={
                  "form-group flex" +
                  (this.state.submitted && !this.state.ExpenseImage
                    ? " has-error"
                    : "")
                }
              >
                <label>Image</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="file"
                  className="form-control-file"
                  onChange={this.handlefilechange}
                />
                {this.state.submitted && !this.state.ExpenseImage && (
                  <i
                    className="fa fa-exclamation-circle req-error pt-3 pl-1"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Expense Image required !"
                  ></i>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createExpense: (expense) => dispatch(createExpense(expense)),
  };
};
export default connect(null, mapDispatchToProps)(AddExpense);
