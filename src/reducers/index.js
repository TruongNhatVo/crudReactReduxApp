import { combineReducers } from 'redux';
import statusReducer from './status';
import sortReducer from './sort';
import tasksReducer from './task';

const myReducer = combineReducers({
	status : statusReducer,
	sort : sortReducer,
	task : tasksReducer
})

export default myReducer;