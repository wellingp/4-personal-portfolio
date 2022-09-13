const contactForm = document.querySelector('.contact-form');
let fullname = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let errorbox = document.getElementById('errorbox');

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