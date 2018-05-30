export const byId = (tasks, id) => {
	let result = -1;
	tasks.forEach((task, index) => {
		if (task.id === id) {
			result = index;
		}
	})
	return result;
}

export const byName = (tasks, name) => {
	let result = false;
	tasks.forEach((task, index) => {
		if (task.name === name) {
			result = true;
		}
	})
	return result;
}