
let emailInput = document.querySelector('#email')
emailInput.addEventListener('input', validateEmail);

function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper

  // Check and Remove any existing errors
    let error = container.querySelector('.error-message');
    if (error) {
       container.removeChild(error);
    }

  // Now add the error if the message isn’t empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
function validateEmail() {
    let value = emailInput.value;
  
    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }
  
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }
  
    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }
  
  
    showErrorMessage(emailInput, null);
    return true;
  }