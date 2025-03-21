function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value} - ${taskDateTime.value}</span>
        <div class="task-actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
        <button class="complete-button" onclick="completeTask(this)">Complete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDateTime.value = '';
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newText = prompt('Edit your task:', span.textContent.split(' - ')[0]);
    if (newText !== null) {
        span.textContent = newText + ' - ' + span.textContent.split(' - ')[1];
    }
}

function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});
