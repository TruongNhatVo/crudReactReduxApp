import { combineReducers } from 'redux';
import tasksReducer from './task';
import editTaskReducer from './editTask';
import searchReducer from './search';

const myReducer = combineReducers({
	task : tasksReducer,
	editTask: editTaskReducer,
	keyword : searchReducer
})

export default myReducer;