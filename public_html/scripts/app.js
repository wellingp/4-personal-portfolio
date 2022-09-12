const contactForm = document.querySelector('.contact-form');
let fullname = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let errorbox = document.getElementById('errorbox');

//Custom Errors
fullname.oninvalid = function(event) {
    event.target.setCustomValidity('Name must be: 2-100 characters, A-Z , . \' -');
}

email.oninvalid = function(event) {
    event.target.setCustomValidity('Subject must be: 3-50 characters, A-Z , . \' -');
}

subject.oninvalid = function(event) {
    event.target.setCustomValidity('Please enter a valid email address.');
}

message.oninvalid = function(event) {
    event.target.setCustomValidity('Message must be: 10-500 characters, A-Z , . \' -');
}


contactForm.addEventListener('submit', (e)=>{
	e.preventDefault();
	
	//Object with all the data for the backend.
	let formData = {
		name: fullname.value,
		email: email.value,
		subject: subject.value,
		message: message.value
	}
	
	//AJAX
	
	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = function(){
		console.log(xhr.responseText);
		if(xhr.responseText == 'success'){
			errorbox.style.color = 'green';
			errorbox.textContent = 'Message Sent!!';
			fullname.value = '';
			email.value = '';
			subject.value = '';
			message.value = '';
		}else{
			errorbox.style.color = 'red';
			errorbox.textContent = 'Please go back and fix indicated errors.';
		}
	}
	
	xhr.send(JSON.stringify(formData));
})