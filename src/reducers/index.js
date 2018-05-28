import { combineReducers } from 'redux';
import tasksReducer from './task';

const myReducer = combineReducers({
	task : tasksReducer
})

export default myReducer;