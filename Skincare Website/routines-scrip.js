document.getElementById('addTaskBtn').addEventListener('click', function() {
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (taskText === '') {
        errorMessage.textContent = 'Task cannot be empty!';
        return;
    }
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove();
    });
    listItem.querySelector('.complete-btn').addEventListener('click', function() {
        listItem.querySelector('span').classList.toggle('completed');
    });
    document.getElementById('taskList').appendChild(listItem);
    taskInput.value = '';
}
