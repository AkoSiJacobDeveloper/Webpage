document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('button');
    const taskContainer = document.getElementById('task-container');

    // Function to add a task
    function addTask() {
        const taskText = inputTask.value.trim();

        if (taskText !== '') {
            // Create a container for the task
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');

            // Create the task paragraph
            const taskParagraph = document.createElement('p');
            taskParagraph.textContent = taskText;
            taskParagraph.classList.add('task');
            taskItem.appendChild(taskParagraph);

            // Create the edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            taskItem.appendChild(editButton);

            // Create the remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            taskItem.appendChild(removeButton);

            const wrapBtn = document.createElement('div')
            wrapBtn.classList.add('wrapBtn');
            taskItem.appendChild(wrapBtn);

            wrapBtn.appendChild(editButton);
            wrapBtn.appendChild(removeButton);

            // Append the task item to the task container
            taskContainer.appendChild(taskItem);

            // Clear the input field
            inputTask.value = '';

            // Event listener for remove button
            removeButton.addEventListener('click', () => {
                taskContainer.removeChild(taskItem);
            });

            // Event listener for edit button
            editButton.addEventListener('click', () => {
                const newTaskText = prompt('Edit task:', taskParagraph.textContent);

                if (newTaskText !== null && newTaskText.trim() !== '') {
                    taskParagraph.textContent = newTaskText.trim();
                }
            });
        } else {
            console.log('Task input is empty');
        }
    }

    // Event listener for button click
    addTaskButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form from submitting
        addTask();
    });

    // Event listener for Enter key press
    inputTask.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior
            addTask();
        }
    });
});
