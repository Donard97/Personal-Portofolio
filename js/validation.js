/* eslint-disable id-length */
/* eslint-disable no-negated-condition */
/* eslint-disable func-style */
const formValidation = document.querySelector('#form');
const emailControl = document.querySelector('#email-address');

const alertMessage = document.createElement('p');
alertMessage.classList.add('error-Message');
alertMessage.textContent = 'Your email should only contain lowercase letters.';

const errorEmail = document.querySelector('.email-msg');
errorEmail.appendChild(alertMessage);

function validationFunct (e) {
  if (emailControl.value !== emailControl.value.toLowerCase()) {
    errorEmail.style.display = 'block';
    e.preventDefault();
  } else {
    errorEmail.style.display = 'none';
  }
}

formValidation.addEventListener('submit', validationFunct);
