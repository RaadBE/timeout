let word = 'prout';
let body = document.querySelector('body');
// let msg;
var times = 0;
var timer = 1000;
   		let score = 0;


function heyYou() {
	if (times < word.length) {
		let msg = document.createElement('p');
		body.append(msg);
		msg.innerHTML += word[times]
		times++;

	} else if (times == word.length) {
		timer = 0;
	}

}
setInterval(heyYou, timer);

// let body = document.querySelector('body');
// var startTime = new Date();
// body.append(startTime)
// function theclok(){

// var loadedSeconds = (new Date().valueOf() - startTime) / 1000;

// console.log(loadedSeconds);
// if (loadedSeconds == 2) {
// 	alert('a minute has passed wake up');
// }
// }
// setInterval(theclok,1000);



let main = document.createElement('div')
main.classList.add('main')
let conta = document.createElement('div')
conta.classList.add('conta')
let nameing = 'circle';
let label = document.createElement('label');
let circle;

label.innerHTML = 'Score : '

for (var i = 1; i < 13; i++) {
	let circle = document.createElement('div')
	conta.append(circle)
	// let randomm = Math.floor(Math.random() * 12) + 1;
	circle.classList.add('circle' + i.toString());
	circle.classList.add('cir');
	// circle.style.backgroundColor = 'red';

}

body.append(main);
main.append(conta);
conta.appendChild(label);
let timerr = 0
	let mycic = document.querySelectorAll('.cir')

function colors() {

	for (var j = 0; j <= 12; j++) {
		let random = Math.floor(Math.random() * 11) + 1;
		let index = random;
		mycic[index].classList.remove('imred');
		mycic[index].style.backgroundColor = 'white';
	}
	let random = Math.floor(Math.random() * 11) + 1;

	mycic[random].classList.add('imred');
	mycic[random].style.backgroundColor = 'red';

mycic.forEach((reddot) => {
    reddot.addEventListener('click', (event) => {
      if (event.target.classList.contains('imred')) {
      	    event.target.classList.remove('imred');

      	      	score++;
			 label.innerHTML = `Score is ${score}`;
      }
    });
  });
}





// circle.classList.add('circle', rraa);
// circle.style.backgroundColor = 'red';

// Assuming you have an element with id 'container' to append the circles to
// circle.appendChild(circle);
// circle[i].style.backgroundColor = ''

// colors();
setInterval(colors, 1000);