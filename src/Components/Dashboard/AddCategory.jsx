import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import './AddCategory.css'
import { createCategory } from "../../Redux/Actions/UserActions";
import { connect } from "react-redux";
class AddCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            CategoryName: "",
            CategoryImage: "",
            submitted: false,
            MaxAmount : Number,
            UserId:0,
        }
    }
    handleNameChange = (e) => {
        this.setState({
          CategoryName: e.target.value,
        });
      };
      handleMaxAmountChange = (e) => {
        this.setState({
          MaxAmount: e.target.value,
        });
      };
      handlefilechange = (e) => {
        this.setState({
          CategoryImage: URL.createObjectURL(e.target.files[0]),
        });
      };
      updateState () {
        var uid = JSON.parse(localStorage.getItem("user"));
        this.setState({
            submitted:true,
            UserId : uid[0].id
        });
        this.state.submitted = true;
        this.state.UserId = uid[0].id ;
         
       }
      handleSubmit = (e) => {
        e.preventDefault();
        this.updateState();
        const { CategoryName, CategoryImage , MaxAmount} = this.state;
        if (CategoryName && CategoryImage && MaxAmount) {
          this.props.createCategory(this.state);
          console.log(this.state);
          this.props.onHide();
        }
        
      };
      
    render() {
        return (
            <div>
                 <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="model-add-category"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Category
            </Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <div
                className={
                  "form-group flex" +
                  (this.state.submitted && !this.state.CategoryName
                    ? " has-error"
                    : "")
                }
              >
                <label>Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter CategoryName"
                  onChange={this.handleNameChange}
                />
                {this.state.submitted && !this.state.CategoryName && (
                  <i
                    className="fa fa-exclamation-circle req-error pt-3 pl-1"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="CategoryName required !"
                  ></i>
                )}
              </div>
              <div
                className={
                  "form-group flex" +
                  (this.state.submitted && !this.state.MaxAmount
                    ? " has-error"
                    : "")
                }
              >
              <label>Max Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter MaxAmount"
                  onChange={this.handleMaxAmountChange}
                />
                {this.state.submitted && !this.state.MaxAmount && (
                  <i
                    className="fa fa-exclamation-circle req-error pt-3 pl-1"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="MaxAmount required !"
                  ></i>
                )}
              </div>
              <div
                className={
                  "form-group flex" +
                  (this.state.submitted && !this.state.CategoryImage
                    ? " has-error"
                    : "")
                }
              >
                <label>Select Category Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={this.handlefilechange}
                />
                {this.state.submitted && !this.state.CategoryImage && (
                  <i
                    className="fa fa-exclamation-circle req-error pt-3 pl-1"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Category Image required !"
                  ></i>
                )}

                <img src={this.state.CategoryImage}  alt="not found" height="100px" width="100px"/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" onClick={this.handleSubmit} className="btn btn-primary">
                Save
              </button>
              <button className="btn btn-secondary" onClick={this.props.onHide}>
                Close
              </button>
            </Modal.Footer>
          </form>
        </Modal>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      createCategory: (category) => dispatch(createCategory(category)),
    };
  };
export default connect(null, mapDispatchToProps)(AddCategory); 