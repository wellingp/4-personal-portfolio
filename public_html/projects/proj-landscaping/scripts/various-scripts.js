var entireForm = document.getElementById('myform');
var fixForm = document.getElementById('formerror');

const shortLname = document.getElementById('lnameerror');
const lastName = document.getElementById('lname');

const shortEmail = document.getElementById('emailerror');
const emailField = document.getElementById('email');

const firstName = document.getElementById('fname');
const shortFname = document.getElementById('fnameerror');

const chooseService = document.getElementById('service');
const noService = document.getElementById('servicemissing');

//First Name
firstName.addEventListener('change', validateFname);
function validateFname() {
  if(firstName.value.length == 1 || firstName.value.length == 2){
        shortFname.innerHTML = "This field must have at least 3 characters.";
    }
    else{
        shortFname.innerHTML = "";
    }
}

//Last Name
lastName.addEventListener('change', validateLname);
function validateLname() {
  if(lastName.value.length == 1 || lastName.value.length == 2){
        shortLname.innerHTML = "This field must have at least 3 characters.";
    }
    else{
        shortLname.innerHTML = "";
    }
}

//Email
emailField.addEventListener('change', validateEmail);

function validateEmail() {
  if(emailField.value.length == 1 || emailField.value.length == 2){
        shortEmail.innerHTML = "This field must have at least 3 characters.";
    }
    else{
        shortEmail.innerHTML = "";
    }
}

//Missing Sales
chooseService.addEventListener('focusout', validateSales);
function validateSales()
{
  if(chooseService.value == ""){
        noService.innerHTML = "Please choose a service.";
    }
    else{
        noService.innerHTML = "";
    }
}

//Form Submitted
entireForm.addEventListener('submit', formSubmitted);
function formSubmitted(e)
{
  if(firstName.value.length > 2 &&
    lastName.value.length > 2 &&
    emailField.value.length > 2 &&
    chooseService.value != -1) {
    alert("Thank-you! Your form has been submitted.");
    return false;
  }
  else{
    e.preventDefault();
    fixForm.innerHTML = "This form has errors, please review the error messages and try again.";
  }
}
