// Access toggle switch HTML element
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

// const userName = document.getElementById('user');
// const title  = document.getElementById('title');
// const comment = document.getElementById('msg');
// const submitButton = document.getElementById('submit-comment-btn');

const form = document.querySelector('#comment-form');
const commentBox = document.querySelector('#comment-box');
const userBox = document.querySelector('#user-box');
const titleBox = document.querySelector('#title-box');
const submitButton = document.querySelector('#submit-comment-btn');

// Create a function to save the comment to local storage
const saveCommentToLocalStorage = (comment) => {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));
};

// Create a function to save the comment to local storage
const saveUserToLocalStorage = (usernames) => {
    const userNameBox = JSON.parse(localStorage.getItem('userNameBox')) || [];
    comments.push(usernames);
    localStorage.setItem('userNameBox', JSON.stringify(userNameBox));
  };

  // Create a function to save the comment to local storage
const saveTitleToLocalStorage = (titles) => {
    const titleBox = JSON.parse(localStorage.getItem('titleBox')) || [];
    comments.push(titles);
    localStorage.setItem('titleBox', JSON.stringify(titleBox));
  };
  
// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
    console.log('Username value:', userBox.value);
    console.log('Title value:', titleBox.value);
    console.log('Comment box value:', commentBox.value);
    console.log('Submit button:', submitButton);
  const comment = commentBox.value;
  saveCommentToLocalStorage(comment);
  commentBox.value = '';
  titleBox.value = '';
  userBox.value = '';
  location.href = 'blog.html';
});