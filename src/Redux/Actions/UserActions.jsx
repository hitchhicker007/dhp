import axios from 'axios';
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    CREATE_POSTS_REQUEST,
    CREATE_POSTS_SUCCESS,
    CREATE_POSTS_FAIL
} from '../Constants/App';


const USER_URL = "http://localhost:3006/User" ; 
const Category_URL = "http://localhost:3006/Category";
const Expense_URL = "http://localhost:3006/Expense";
const API_URL = "http://localhost:50994/api/Register/sendMail?emailId=" ;
// Get All Post
function request() {
    return {
        type: GET_POSTS_REQUEST
    }
}

function receiveData(json) {
    return {
        type: GET_POSTS_SUCCESS,
        data: json
    }
}

export function getPosts() {
    //console.log("Function call")
    return dispatch => {
        //console.log("Action Inside Dispatch")
        dispatch(request());
        
        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });

        return axios.get(USER_URL,{ timeout: 20000 })
        	.then(response => response.data)
        	.then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: GET_POSTS_FAIL, data: json });
                } else {
                    console.log("success")
                    return (dispatch(receiveData(json)));
                }
        	})
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}
export function getCategorys(Userid) {
    console.log("Function call *** ")
    return dispatch => {
        //console.log("Action Inside Dispatch")
        dispatch(request());
        
        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });
        var url = Category_URL + '?UserId=' + Userid;
  console.log('URL *****************', url );
        return axios.get(url,{ timeout: 20000 })
        	.then(response => response.data)
        	.then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: GET_POSTS_FAIL, data: json });
                } else {
                    console.log("success")
                    return (dispatch(receiveData(json)));
                }
        	})
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}
function request1() {
    return {
        type: GET_POSTS_REQUEST
    }
}

function receiveData1(json) {
    return {
        type: GET_POSTS_SUCCESS,
        data: json
    }
}

export function getExpenses(CategoryId) {
    console.log("Function call *** ")
    return dispatch => {
        //console.log("Action Inside Dispatch")
        dispatch(request1());
        
        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });
        var url = Expense_URL + '?CategoryId=' + CategoryId;
  console.log('URL *****************', url );
        return axios.get(url,{ timeout: 20000 })
        	.then(response => response.data)
        	.then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: GET_POSTS_FAIL, data: json });
                } else {
                    console.log("success")
                    return (dispatch(receiveData1(json)));
                }
        	})
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}

function createPostRequest() {
    return {
        type: CREATE_POSTS_REQUEST
    }
}

function createPostReceiveData(json) {
    return {
        type: CREATE_POSTS_SUCCESS,
        data: json
    }
}

export function createPosts(user) {

    return dispatch => {
        dispatch(createPostRequest());

        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });

        console.log("User data in createPost : ",USER_URL)

        return axios.post(USER_URL, user)
            .then(response => response.data)
            .then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_POSTS_FAIL, data: json });
                } else {
                    return (dispatch(createPostReceiveData(json)));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });

    };
}

function createPostRequestApi() {
    return {
        type: CREATE_POSTS_REQUEST
    }
}

function createPostReceiveDataApi(json) {
    return {
        type: CREATE_POSTS_SUCCESS,
        data: json
    }
}

export function createPostsApiCall(email) {

    return dispatch => {
        dispatch(createPostRequestApi());

        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });

        console.log("User data in createPost : ",API_URL)

        return axios.get(API_URL + email)
            .then(response => response.data)
            .then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_POSTS_FAIL, data: json });
                } else {
                    return (dispatch(createPostReceiveDataApi(json)));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });

            
    };
}




export function createCategory(category) {

    return dispatch => {
        dispatch(createPostRequest());
        // console.log("category data in createCategory : ",Category_URL)
        return axios.post(Category_URL, category)
            .then(response => response.data)
            .then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_POSTS_FAIL, data: json });
                } else {
                    return (dispatch(getCategorys(category.UserId)));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}


export function createExpense(expense) {

    return dispatch => {
        dispatch(createPostRequest());
        console.log("expense data in createExpense : ",expense)

        return axios.post(Expense_URL, expense)
            .then(response => response.data)
            .then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_POSTS_FAIL, data: json });
                } else {
                    return (dispatch(createPostReceiveDataApi(json)));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}
