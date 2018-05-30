import * as types from './../contants/actionType';

var initialState = {
	id : '',
	name : '',
	status: false
};
var editTaskReducer = (state = initialState, action ) => {
	switch (action.type) {
		case types.EDIT_TASK:
			state = action.task;
			return state;
		default:
			return state;
	}
}

export default editTaskReducer;