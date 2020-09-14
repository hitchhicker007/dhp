import React, { Component } from 'react'
import './CategoryList.css'
import { getCategorys } from "../../Redux/Actions/UserActions";
import { connect } from "react-redux";
class CategoryList extends Component {
constructor(props) {
    super(props)

    this.state = {
        data: [],
    }
}

componentWillReceiveProps(nextProps) {
    if (nextProps.getcategorys !== this.props.getcategorys) {
      const postsarray = nextProps.getcategorys;
    
      this.setState({
        data: postsarray,
      });
    }
  }

  componentDidMount() {
    var uid = JSON.parse(localStorage.getItem("user"));
    this.props.getCategorys(uid[0].id);
  }

  handleCategoryClick = (categoryId,MaxAmount) => {
     console.log("i'm categoryId " + categoryId);
     this.props.showExpenses(true, categoryId,MaxAmount);
  };

AllCategories() {
        if (this.state.data) {
          return this.state.data.map((category, index) => {
            return (
              <div key={index} className="d-flex justify-content-around">
                <a onClick={() => this.handleCategoryClick(category.id,category.MaxAmount)}>
                  {" "}
                  {category.CategoryName}{" "}
                </a>
                <img
                  src={category.CategoryImage}
                  alt="not found"
                  className="CategoryImage"
                />
              </div>
            );
          });
        } else {
          return [];
        }
      }

    render() {
        return (
            <div>
      <div>
        <div className="sidenav">
          <h4>Consume Expense</h4>
          {this.AllCategories()}
        </div>
      </div> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    getcategorys: state.category.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    getCategorys: (userid) => dispatch(getCategorys(userid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);