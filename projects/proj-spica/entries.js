//Change journal entry

//Entries

let body0 = document.getElementById('body0');
let body1 = document.getElementById('body1');
let body2 = document.getElementById('body2');

//Body array
let bodyArray = [body0, body1, body2];

//Show default content
let x = 1;

body1.classList.toggle('hidden');

//Buttons
let backButton = document.getElementById('back-button');
let forwardButton = document.getElementById('forward-button');

backButton.addEventListener('click', (event) => {
   event.preventDefault();
   if(x > 0){
      bodyArray[x].classList.toggle('hidden');

      x = x - 1;
      bodyArray[x].classList.toggle('hidden');
   }
});

forwardButton.addEventListener('click', (event) => {
   event.preventDefault();
   if(x < 2){
      bodyArray[x].classList.toggle('hidden');

      x = x + 1;
      bodyArray[x].classList.toggle('hidden');
   }
});

//Read More link
let readMoreButton = document.getElementById('read-more-button');
let readMore = document.getElementById('read-more');

let readCount = 0;

readMoreButton.addEventListener('click', (event) => {
   event.preventDefault();

   switch(readCount) {
      case 0:
         readMoreButton.innerHTML = '潜む';
         readMore.style.display = 'block';
         readCount = 1;
         break;
      case 1:
         readMoreButton.innerHTML = '…続きを読む';
         readMore.style.display = 'none';
         readCount = 0;
         break;
   }
});