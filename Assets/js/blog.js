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

// Get the data from local storage
const blogPosts = JSON.parse(localStorage.getItem("titleBox"));

// Get the container element to display the blog posts
const newContainer = document.getElementById("blogPosts");

// Loop through the blog posts array and create HTML elements for each post
blogPosts.forEach(post => {
    // Create a new div element for each post
    const postDiv = document.createElement("div");

    postDiv.innerHTML = `
        <h2>User: ${post.userBox}</h2>
        <h3>Title: ${post.titleBox}</h3>
        <p>Comment: ${post.commentBox}</p>
    `;

    // Append the post div to the container
    newContainer.appendChild(postDiv);
});

const backButton = document.getElementById('back-button');

backButton.addEventListener('click', function () {
  location.href = 'index.html';
});
