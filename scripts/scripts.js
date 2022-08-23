let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let messageBox = document.getElementById('message-box');

fname.addEventListener('type', event => {
   fname.value = '';
});

lname.addEventListener('focus', event => {
   lname.value = '';
});

email.addEventListener('focus', event => {
   email.value = '';
});

messageBox.addEventListener('focus', event => {
   messageBox.value = '';
});