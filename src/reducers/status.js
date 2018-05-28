import * as types from './../contants/actionType';

var initialState = false;
var statusReducer = (state = initialState, action ) => {
	switch (action.type) {
		case types.TOGGLE_STATUS:
			return !state;
		default:
			return state;
	}
}

export default statusReducer;