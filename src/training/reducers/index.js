import { combineReducers } from 'redux';
import statusReducer from './status';
import sortReducer from './sort';

const myReducer = combineReducers({
	status : statusReducer,
	sort : sortReducer
})

export default myReducer;