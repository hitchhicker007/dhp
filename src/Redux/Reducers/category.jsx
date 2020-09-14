import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	CREATE_POSTS_REQUEST,
	CREATE_POSTS_SUCCESS,
	CREATE_POSTS_FAIL
} from '../Constants/App';

const initialState = {
	data:[],
	fetching:false,
	error:''
};

export default function CategoryReducer(state = initialState, action = {}) {
	switch (action.type) {
		case GET_POSTS_REQUEST:
			console.log("Reducer Request")
			return {
				fetching: true,
				error: ''
			};
		case GET_POSTS_SUCCESS:
			console.log("Reducer Success",action)
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
		case GET_POSTS_FAIL:
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
			case CREATE_POSTS_REQUEST:
			//console.log("from Reducer Request")
			return {
				...state,
				fetching: true,
				error: ''
			};
		case CREATE_POSTS_SUCCESS:
			//console.log("from Reducer Success",action)
			return {
				...state,
				// data: action.data,
				fetching: false,
				error: ''
			};
		case CREATE_POSTS_FAIL:
			//console.log("from Reducer Fail",action)
			return {
				...state,
				// data: action.data,
				fetching: false,
				error: ''
			};
		default:
			return state;
	}
	
}