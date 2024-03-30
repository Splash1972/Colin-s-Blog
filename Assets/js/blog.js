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

const blogPost = {
  userBox: "John Doe", // Example data, replace with your actual data
  titleBox: "My Blog Post",
  commentBox: "This is the content of my blog post.",
};

// Update the HTML elements with the information from the blogPost object
document.getElementById("user").textContent = blogPost.userBox;
document.getElementById("title").textContent = blogPost.titleBox;
document.getElementById("comment").textContent = blogPost.commentBox;


// commentBox.value = '';
// titleBox.value = '';
// userBox.value = '';

const backButton = document.getElementById('back-button');

backButton.addEventListener('click', function() {
    location.href = 'index.html';
});
