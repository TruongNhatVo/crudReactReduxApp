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

export const addTask = (task) => {
	return {
		type : types.ADD_TASK,
		task
	}
}