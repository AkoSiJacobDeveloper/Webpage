const parentDiv = document.getElementById('parent-container');

// Create element
const header = document.createElement('h1');
header.classList.add = 'header';
header.textContent = 'Alistair Jan';

// Append to the parent container
parentDiv.appendChild(header);