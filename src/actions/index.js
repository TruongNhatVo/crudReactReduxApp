import * as types from './../contants/actionType';

export const status = () => {
	return {
		type : types.TOGGLE_STATUS
	}
}

export const listTask = () => {
	return {
		type : types.LIST_ALL,
	}
}

export const addTask = (task) => {
	return {
		type : types.ADD_TASK,
		task
	}
}