document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const newTodo = document.createElement('li');

    const todoSpan = document.createElement('span');
    todoSpan.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(newTodo);
    });

    newTodo.appendChild(todoSpan);
    newTodo.appendChild(deleteButton);
    todoList.appendChild(newTodo);

    document.getElementById('new-todo').value = '';
});

