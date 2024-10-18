document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission until validation is done
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Clear any previous error messages
    errorMessage.innerHTML = '';
  
    // Validate name (must not be empty)
    if (name === '') {
      errorMessage.innerHTML += 'Please enter your name.<br>';
    }
  
    // Validate email format
    if (!validateEmail(email)) {
      errorMessage.innerHTML += 'Please enter a valid email address.<br>';
    }
  
    // Validate question (must not be empty)
    if (question === '') {
      errorMessage.innerHTML += 'Please enter your question.<br>';
    }
  
    // If no errors, submit the form
    if (errorMessage.innerHTML === '') {
      this.submit(); // Allows form submission if validation passes
    }
  });
  
  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  