let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

let davy = document.getElementsByClassName("davy");
let davyArray = Array.from(davy);

let mike = document.getElementsByClassName("mike");
let mikeArray = Array.from(mike);

let micky = document.getElementsByClassName("micky");
let mickyArray = Array.from(micky);

let peter = document.getElementsByClassName("peter");
let peterArray = Array.from(peter);

function davyFlip(){
	davyArray.forEach(item => {
		item.addEventListener('click', event => {
			davyArray.forEach(item => {
				item.classList.toggle('davy-picture');
				h1.textContent = '🌼 How fab, it\'s Davy! 🌼';
				h1.style.color = '#47A3D2';
				h1.style.fontWeight = 'bold';
				h1.style.fontSize = '2.2em';
				h2.remove();
			})

			mikeArray.forEach(item => {
				item.className = 'mike';
			})
			mickyArray.forEach(item => {
				item.className = 'micky';
			})
			peterArray.forEach(item => {
				item.className = 'peter';
			})
		})
	})
}

davyFlip();

function mikeFlip(){
	mikeArray.forEach(item => {
		item.addEventListener('click', event => {
			mikeArray.forEach(item => {
				item.classList.toggle('mike-picture');
				h1.textContent = '🎸 Groovy! Mike is where it\'s at! 🎸';
				h1.style.color = '#FB7E3E';
				h1.style.fontWeight = 'bold';
				h1.style.fontSize = '2.2em';
				h2.remove();
			})
			
			davyArray.forEach(item => {
				item.className = 'davy';
			})
			mickyArray.forEach(item => {
				item.className = 'micky';
			})
			peterArray.forEach(item => {
				item.className = 'peter';
			})
		})
	})
}

mikeFlip();

function mickyFlip(){
	mickyArray.forEach(item => {
		item.addEventListener('click', event => {
			mickyArray.forEach(item => {
				item.classList.toggle('micky-picture');
				h1.textContent = '🌻 Cool! You dig Micky! 🌻';
				h1.style.color = '#BED73B';
				h1.style.fontWeight = 'bold';
				h1.style.fontSize = '2.2em';
				h2.remove();
			})
			
			davyArray.forEach(item => {
				item.className = 'davy';
			})
			mikeArray.forEach(item => {
				item.className = 'mike';
			})
			peterArray.forEach(item => {
				item.className = 'peter';
			})
		})
	})
}

mickyFlip();

function peterFlip(){
	peterArray.forEach(item => {
		item.addEventListener('click', event => {
			peterArray.forEach(item => {
				item.classList.toggle('peter-picture');
				h1.textContent = '🙂 Man, that\'s Peter! 🙂';
				h1.style.color = '#FD4638';
				h1.style.fontWeight = 'bold';
				h1.style.fontSize = '2.2em';
				h2.remove();
			})
			
			davyArray.forEach(item => {
				item.className = 'davy';
			})
			mikeArray.forEach(item => {
				item.className = 'mike';
			})
			mickyArray.forEach(item => {
				item.className = 'micky';
			})
		})
	})
}

peterFlip();