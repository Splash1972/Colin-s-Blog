const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

const displayBlogPost = localStorage.getItem('titleBox') || 'No stored value';

// Create a new element and add the stored blog post to its text content
const newElement = document.createElement('p');
newElement.textContent = displayBlogPost || 'No stored value';

const displayArea = document.getElementById('displayArea');
displayArea.appendChild(newElement);  


const backButton = document.getElementById('back-button');

backButton.addEventListener('click', function () {
  location.href = 'index.html';
});
