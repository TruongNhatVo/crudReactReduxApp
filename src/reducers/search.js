import * as types from './../contants/actionType';

var initialState = '';
var searchReducer = (state = initialState, action ) => {
	switch (action.type) {
		case types.SEARCH_TASK:
			state = action.keyword
			return state;
		default:
			return state;
	}
}

export default searchReducer;