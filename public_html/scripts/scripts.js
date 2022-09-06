/* //Manage display of placeholders on contact form.

let formName = document.getElementById('name');
formName.value = 'Full Name Test';

formName.addEventListener('select', () => {
   formName.value = '';
});

formName.addEventListener('focusout', () => {
   if (formName.value = ''){
      formName.value = 'Full Name Changed';
   }
}) */