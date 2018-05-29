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

export const updateStatusTask = (id) => {
	return {
		type : types.UPDATE_STATUS_TASK,
		id
	}
}

export const deleteTask = (id) => {
	return {
		type : types.DELETE_TASK,
		id
	}
}