import * as types from './../contants/actionType';

var data = JSON.parse(localStorage.getItem("task"));
var initialState = data ? data : [];
var tasksReducer = (state = initialState, action ) => {
	switch (action.type) {
		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			let task = {
				id : action.task.id++,
				name : action.task.name,
				status : (action.task.status  === "true" ? true : false)
			}
			state.push(task);
			localStorage.setItem("task", JSON.stringify(state));
			return [...state];
		default:
			return state;
	}
}

export default tasksReducer;