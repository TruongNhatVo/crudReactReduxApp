import * as types from './../contants/actionType';

var initialState = {
	by : 'id',
	value : 1
}
var sortReducer = (state = initialState, action ) => {
	switch (action.type) {
		case types.SORT_VALUE:
			return {
				by : action.value.by,
				value : action.value.value
			}
		default:
			return state;
	}
}

export default sortReducer;