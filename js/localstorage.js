/* eslint-disable max-len */
/* eslint-disable func-style */
const userFullName = document.getElementById('full-name');
const userLastName = document.getElementById('Last-name');
const userEmail = document.getElementById('email-address');
const userMessage = document.getElementById('message');

function setLocal () {
  const localName = localStorage.getItem('full-name');
  const localLastName = localStorage.getItem('Last-name');
  const localemail = localStorage.getItem('email-address');
  const localText = localStorage.getItem('message');
  document.getElementById('full-name').value = localName;
  document.getElementById('Last-name').value = localLastName;
  document.getElementById('email-address').value = localemail;
  document.getElementById('message').value = localText;
}

function populateForm () {
  localStorage.setItem('full-name', document.getElementById('full-name').value);
  localStorage.setItem('Last-name', document.getElementById('Last-name').value);
  localStorage.setItem('email-address', document.getElementById('email-address').value);
  localStorage.setItem('message', document.getElementById('message').value);
  setLocal();
}

if (localStorage.getItem('full-name')) {
  populateForm();
} else {
 setLocal();
}

userFullName.onchange = populateForm;
userLastName.onchange = populateForm;
userEmail.onchange = populateForm;
userMessage.onchange = populateForm;
