document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from refreshing
    event.preventDefault();

    // Retrieve the user input
    const userName = document.getElementById('userName').value;
    const userAge = document.getElementById('userAge').value;
    const userHobbies = document.getElementById('userHobbies').value;
    const isStudent = document.querySelector('.verify input[type="checkbox"]').checked;

    // Create a new div to display the summary
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'p-4 bg-light mb-3 rounded';

    // What the summaryDiv should like when holding the user input
    summaryDiv.innerHTML = `
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Age:</strong> ${userAge}</p>
        <p><strong>Hobbies:</strong> ${userHobbies}</p>
        <p><strong>Student:</strong> ${isStudent ? 'Yes' : 'No'}</p>
    `;

    // Create a div to contain the edit and delete button
    const wrapBtn = document.createElement('div');
    wrapBtn.classList.add('wrapBtn');
    summaryDiv.appendChild(wrapBtn);

    // Create Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-summary');

    // Create delete button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.classList.add('remove-summary');

    // Append the buttons to the wrapBtn
    wrapBtn.appendChild(editButton);
    wrapBtn.appendChild(removeButton);

    // A function to edit summary
    editButton.addEventListener('click', () => {
       
        document.getElementById('userName').value = userName;
        document.getElementById('userAge').value = userAge;
        document.getElementById('userHobbies').value = userHobbies;

        // Remove the current summaryDiv from the container
        document.getElementById('summary-container').removeChild(summaryDiv);
    });

    // A function to delete summary
    removeButton.addEventListener('click', () => {
        document.getElementById('summary-container').removeChild(summaryDiv);
    });

    // Append the summaryDiv to the summary-container
    document.getElementById('summary-container').appendChild(summaryDiv);

    // Clear the input fields after clicking the button
    this.reset();
});