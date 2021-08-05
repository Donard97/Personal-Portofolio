/* eslint-disable max-len */
/* eslint-disable func-style */


const inputName = document.getElementById('full-name');
const inputLastName = document.getElementById('Last-name');
const inputEmail = document.getElementById('email-address');
const inputMessage = document.getElementById('message');
const formLocally = document.getElementById('form');

function storageLocally () {
  const localName = inputName.value;
  const localLastName = inputLastName.value;
  const localEmail = inputEmail.value;
  const localMessage = inputMessage.value;

  localStorage.setItem('full-name', localName);
  localStorage.setItem('Last-name', localLastName);
  localStorage.setItem('email-address', localEmail);
  localStorage.setItem('message', localMessage);
}

function preFillData () {
  inputName.value += localStorage.getItem('full-name');
  inputLastName.value += localStorage.getItem('Last-name');
  inputEmail.value += localStorage.getItem('email-address');
  inputMessage.value += localStorage.getItem('message');
}

if (localStorage.getItem('full-name')) {
  preFillData();
} else {
  storageLocally();
}

inputName.onchange = storageLocally;
inputEmail.onchange = storageLocally;
inputMessage.onchange = storageLocally;

formLocally.addEventListener('submit', storageLocally, preFillData);

