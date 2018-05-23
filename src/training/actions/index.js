import * as types from './../contants/actionType';

export const status = () => {
	return {
		type : types.TOGGLE_STATUS
	}
}

export const sortValue = (value) => {
	return {
		type : types.SORT_VALUE,
		value
	}
}