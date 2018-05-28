import * as types from './../contants/actionType';

var initialState = [];
var tasksReducer = (state = initialState, action ) => {
	switch (action.type) {
		case types.ADD_TASK:
			console.log(action);
			return state;
		default:
			return state;
	}
}

export default tasksReducer;