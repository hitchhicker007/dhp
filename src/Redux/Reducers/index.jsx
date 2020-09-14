import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import expense from './expense'
export default combineReducers({
	user,
	category,
	expense
});