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

const form = document.querySelector('#comment-form');

const submitButton = document.querySelector('#submit-comment-btn');

// Create a function to save the comment to local storage
// const saveCommentToLocalStorage = (comment) => {
//   const comments = JSON.parse(localStorage.getItem('comments')) || [];
//   comments.push(comment);
//   localStorage.setItem('comments', JSON.stringify(comments));
// };

// // Create a function to save the username to local storage
// const saveUserToLocalStorage = (username) => {
//     const userNameBox = JSON.parse(localStorage.getItem('userNameBox')) || [];
//     userNameBox.push(username);
//     localStorage.setItem('userNameBox', JSON.stringify(userNameBox));
//   };

// Create a function to save the title to local storage
const saveToLocalStorage = (blogPost) => {
  console.log(blogPost);
  const titleBox = JSON.parse(localStorage.getItem('titleBox')) || [];
  console.log(titleBox);
  titleBox.push(blogPost);
  console.log(titleBox);
  localStorage.setItem('titleBox', JSON.stringify(titleBox));
};



// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
  const commentBox = document.querySelector('#comment-box').value.trim();
  const userBox = document.querySelector('#user-box').value.trim();
  const titleBox = document.querySelector('#title-box').value.trim();
  event.preventDefault();
  console.log('Username value:', userBox);
  console.log('Title value:', titleBox);
  console.log('Comment box value:', commentBox);
  console.log('Submit button:', submitButton);
  // const comment = commentBox.value;
  // const title = titleBox.value;
  // const user = userBox.value;

  // Check if the comment, title, or user input fields are empty
  if (!commentBox || !titleBox || !userBox) {
    alert('Please enter a comment, title, and username before submitting.');
    return;
  }

  const blogPost = {
    userBox: userBox,
    titleBox: titleBox,
    commentBox: commentBox,
  };

  console.log(blogPost);
  saveToLocalStorage(blogPost);

  // saveCommentToLocalStorage(comment);
  // saveTitleToLocalStorage(title);
  // saveUserToLocalStorage(user);

  // commentBox.value = '';
  // titleBox.value = '';
  // userBox.value = '';
  location.href = 'blog.html';
});