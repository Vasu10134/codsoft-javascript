document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const clearBtn = document.getElementById('clear-tasks');

    // Load tasks from local storage
    loadTasks();

    // Add task event
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            saveTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task');
        }
    });

    // Delete task event
    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this task?')) {
                e.target.parentElement.remove();
                removeTask(e.target.parentElement);
            }
        }
    });

    // Clear tasks event
    clearBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all tasks?')) {
            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
            localStorage.clear();
        }
    });

    // Function to add task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }

    // Function to save task to local storage
    function saveTask(taskText) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to remove task from local storage
    function removeTask(taskItem) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskText = taskItem.textContent.trim();
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from local storage
    function loadTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(task => addTask(task));
    }
});
