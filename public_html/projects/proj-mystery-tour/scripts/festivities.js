//Hide all activities
let description = document.getElementsByClassName('yellow');
let descriptionArray = Array.from(description);

//Hide all by default
descriptionArray.forEach((item) => {
   item.style.display = 'none';
});

//Rows
let tugOfWar = document.getElementById('tug-of-war');
let marathon = document.getElementById('marathon');
let food = document.getElementById('food');
let tent = document.getElementById('tent');
let songs = document.getElementById('songs');
let gentlemen = document.getElementById('gentlemen'); 

//Headings (listeners on each)
let tugOfWarButton = document.getElementById('tug-of-war-button').addEventListener('click', () => {
   if(tugOfWar.style.display == 'none'){
      tugOfWar.style.display = 'block';
   } else {
      tugOfWar.style.display = 'none';
   }
});
let marathonButton = document.getElementById('marathon-button').addEventListener('click', () => {
   if(marathon.style.display == 'none'){
      marathon.style.display = 'block';
   } else {
      marathon.style.display = 'none';
   }
});
let foodButton = document.getElementById('food-button').addEventListener('click', () => {
   if(food.style.display == 'none'){
      food.style.display = 'block';
   } else {
      food.style.display = 'none';
   }
});
let tentButton = document.getElementById('tent-button').addEventListener('click', () => {
   if(tent.style.display == 'none'){
      tent.style.display = 'block';
   } else {
      tent.style.display = 'none';
   }
});
let songsButton = document.getElementById('songs-button').addEventListener('click', () => {
   if(songs.style.display == 'none'){
      songs.style.display = 'block';
   } else {
      songs.style.display = 'none';
   }
});
let gentlemenButton = document.getElementById('gentlemen-button').addEventListener('click', () => {
   if(gentlemen.style.display == 'none'){
      gentlemen.style.display = 'block';
   } else {
      gentlemen.style.display = 'none';
   }
});