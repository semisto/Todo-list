window.addEventListener('load', () => {
	const form = document.getElementById('task-form');
	const input = document.getElementById('task-input');
	const tasks = document.getElementById('tasks');

	form.addEventListener('submit', e => {
		e.preventDefault(); //stop refreshing the page on submit
		if (!input.value) {
			alert("Please fill out a task");
			return;
		}
		const task = document.createElement('div');
		task.classList.add('task');
		tasks.append(task);
		const content = document.createElement('div');
		content.classList.add('content');
		task.append(content);
		const text = document.createElement('input');
		text.classList.add('text');
		text.type = 'text';
		text.value = input.value;
		text.setAttribute('readonly', 'readonly');
		content.append(text);
		const actions = document.createElement('div');
		actions.classList.add('actions');
		task.append(actions);
		const edit = document.createElement('button');
		edit.classList.add('edit');
		edit.innerHTML = 'Edit';
		actions.append(edit);
		const delet = document.createElement('button');
		delet.classList.add('delete');
		delet.innerHTML = 'Delete';
		actions.append(delet);
		input.value = '';

		edit.addEventListener('click', () => {
			if (edit.innerText.toLowerCase() == 'edit') {
				text.removeAttribute('readonly');
				text.focus();
				edit.innerText = 'Save';
			} else {
				text.setAttribute('readonly', 'readonly');
				edit.innerText = 'Edit';
			}


		});
		// tasks.addEventListener('click', e => {
		// 	if (e.target.tagName == 'BUTTON' && e.target.innerHTML.toLowerCase() == 'delete') {
		// 		e.target.parentElement.parentElement.remove();
		// 	}
		// });
		delet.addEventListener('click', () => {
			tasks.removeChild(task);
		});
	});
});