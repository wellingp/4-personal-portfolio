// Patti W
// 14-Jul-2022
// Script to power the image carousels.

let attractionsDiv = document.getElementById('attractions-carousel');
let attractionsHeading = document.getElementById('attractions-heading');
let attractionsDescription = document.getElementById('attractions-description');
let backButton = document.getElementById('back-button');
let forwardButton = document.getElementById('forward-button');
let attractionsImage = document.getElementById('attractions-image');

let imagesArray = ['images/extra-shot-18.jpg', 'images/extra-shot-17.jpg', 'images/extra-shot-40.jpg', 'images/extra-shot-26.jpg', 'images/extra-shot-38.jpg', 'images/extra-shot-22-b.png'];

let titleArray = ['Flying', 'Fool\'s Hill', 'Ancient Roman Ruins', 'English Garden', 'Bluejay Way', 'Animals \(Four Different Ones\)...'];

let descriptionArray = ['Beyond the blue horizon, far above the clouds, in a land that no one knows. A secret place, where the eyes of man have never set foot...', 
'See the sun going down and the world spinning round from Fool\'s Hill.', 
'They really have been there an awful long time. They are, in fact, a little difficult to see because they\'re almost flattened to the ground...', 
'Sit in an English garden waiting for the sun. If the sun doesn\'t come, you\'ll get a tan from standing in the English rain.', 
'Please don\'t be long. Please don\'t you be very long...', 
'Walrus, rabbits, chickens, hippos, etc.'];

let i = 0;

forwardButton.addEventListener('click', () => {
   switch(i) {
      case (0):
         attractionsImage.src  = imagesArray[1];
         attractionsHeading.textContent = titleArray [1];
         attractionsDescription.textContent = descriptionArray[1];
         i++;
      break;
      case (1):
         attractionsImage.src  = imagesArray[2];
         attractionsHeading.textContent = titleArray [2];
         attractionsDescription.textContent = descriptionArray[2];
         i++;
      break;
      case (2):
         attractionsImage.src  = imagesArray[3];
         attractionsHeading.textContent = titleArray [3];
         attractionsDescription.textContent = descriptionArray[3];
         i++;
      break;
      case (3):
         attractionsImage.src  = imagesArray[4];
         attractionsHeading.textContent = titleArray [4];
         attractionsDescription.textContent = descriptionArray[4];
         i++;
      break;
      case (4):
         attractionsImage.src  = imagesArray[5];
         attractionsHeading.textContent = titleArray [5];
         attractionsDescription.textContent = descriptionArray[5];
         i++;
      break;
      case (5):
         attractionsImage.src  = imagesArray[0];
         attractionsHeading.textContent = titleArray [0];
         attractionsDescription.textContent = descriptionArray[0];
         i = 0;
      break;
   }
});

backButton.addEventListener('click', () => {
   if(i > 0){
      i--;
      attractionsImage.src  = imagesArray[i];
      attractionsHeading.textContent = titleArray [i];
      attractionsDescription.textContent = descriptionArray[i];
   } else if (i == 0) {
      attractionsImage.src  = imagesArray[5];
      attractionsHeading.textContent = titleArray [5];
      attractionsDescription.textContent = descriptionArray[5];
      i = 5;
   }
});