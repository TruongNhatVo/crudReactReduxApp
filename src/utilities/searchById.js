var searchById = (tasks, id) => {
	let result = -1;
	tasks.forEach((task, index) => {
		if (task.id === id) {
			result = index;
		}
	})
	return result;
}

export default searchById;