//Comment function
let userComment = document.getElementById('comment');
let newCommentsBox = document.getElementById('new-comments-box');
let submitButton = document.getElementById('submit');
let form = document.getElementById('form');
let numberBox = document.getElementById('number-box');
let displayName = document.getElementById('display-name');

let commentNumber = 0;
let numberBoxValue = 0;

form.addEventListener('submit', event => {

   if(userComment.value == ''){
      event.preventDefault();
   } else{
   event.preventDefault();
   numberBox.textContent = ++numberBoxValue;

   newCommentsBox.innerHTML += `コメント${++commentNumber}件, ${displayName.value}: ${userComment.value} <br /><br />`;

   userComment.value = '';
   displayName.value = '';
 }
});

// See More Comments
let moreCommentsButton = document.getElementById('show-comments');
let moreCommentsBox = document.getElementById('new-comments-box');

let showCommentCount = 0;

moreCommentsButton.addEventListener('click', (event) => {
   event.preventDefault();

   switch(showCommentCount) {
      case 0:
         moreCommentsButton.innerHTML = '潜む';
         moreCommentsBox.style.display = 'block';
         showCommentCount = 1;
         break;
      case 1:
         moreCommentsButton.innerHTML = `コメント(${commentNumber})件をすべて見る…`;
         moreCommentsBox.style.display = 'none';
         showCommentCount = 0;
         break;
   }
});

//SNS Button Colour and Numbers and Text
let snsButton = document.getElementsByClassName('sns-button');
let snsButtonArray = Array.from(snsButton);

let likes = document.getElementById('likes');
likes.textContent = 'いいね! ♡93件';

let favButton = document.getElementById('fav-button');
favButton.textContent = 'お気に入りに追加☆';

let profileButton = document.getElementById('profile-button');
profileButton.textContent = 'フォロー';

snsButtonArray.forEach(item => {
   item.addEventListener('click', changeColour);
});

function changeColour() {
   this.classList.toggle('liked-button');
   
   switch(this.textContent){
      case 'いいね! ♡93件':
         this.textContent = 'いいね! ♥94件';
      break;
      case 'いいね! ♥94件':
         this.textContent = 'いいね! ♡93件';
      break;
      case 'お気に入りに追加☆':
         this.textContent = '追加されている★';
      break;
      case '追加されている★':
         this.textContent = 'お気に入りに追加☆';
      break;
      case 'フォロー':
         this.textContent = 'フォロイング';
      break;
      case 'フォロイング':
         this.textContent = 'フォロー';
      break;
   }
};