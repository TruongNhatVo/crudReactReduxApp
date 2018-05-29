import * as types from './../contants/actionType';
import guid from './../utilities/uid';
import searchById from './../utilities/searchById';

var data = JSON.parse(localStorage.getItem("task"));
var initialState = data ? data : [];
var tasksReducer = (state = initialState, action ) => {
	switch (action.type) {
		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			let task = {
				id : guid(),
				name : action.task.name,
				status : (action.task.status  === "true" ? true : false)
			}
			state.push(task);
			localStorage.setItem("task", JSON.stringify(state));
			return [...state];
		case types.UPDATE_STATUS_TASK:
			let indexStatus = searchById(state, action.id);
			state[indexStatus] = {
				...state[indexStatus],
				status: !state[indexStatus].status
			}
			localStorage.setItem("task", JSON.stringify(state));
			return [...state]
		case types.DELETE_TASK:
			let index = searchById(state, action.id);
			state.splice(state[index],1);
			localStorage.setItem("task", JSON.stringify(state));
			return [...state]
		default:
			return state;
	}
}

export default tasksReducer;