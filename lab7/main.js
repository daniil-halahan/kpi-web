const animArea = document.querySelector('.anim');
let redSquare, greenSquare;
let animationInterval;
let step;

document.getElementById("play").addEventListener('click', function() {
	this.disabled = true;
	document.querySelector('.work').classList.toggle('work_open');
})
document.getElementById("close").addEventListener('click', function() {
	document.getElementById("play").disabled = false;
	document.getElementById("start").disabled = false;
	document.getElementById("reload").disabled = true;
	document.querySelector('.work').classList.toggle('work_open');
	clearInterval(animationInterval);
	if(redSquare) redSquare.remove();
	if(greenSquare) greenSquare.remove();
})
document.getElementById("start").addEventListener('click', function() {
	this.disabled = true;
	redSquare = createSquare('red');
	greenSquare = createSquare('green');
	randomPosition(redSquare);
	randomPosition(greenSquare);
	startAnimation();
})
document.getElementById("reload").addEventListener('click', function() {
	this.disabled = true;
	clearInterval(animationInterval);
	step = 1;
	randomPosition(redSquare);
	randomPosition(greenSquare);
	startAnimation();
})

function randomPosition(square) {
  square.style.left = `${Math.random() * (animArea.clientWidth - 10)}px`;
  square.style.top = `${Math.random() * (animArea.clientHeight - 10)}px`;
}
function createSquare(color) {
  const square = document.createElement('div');
  square.style.position = 'absolute';
  square.style.width = '10px';
  square.style.height = '10px';
  square.style.backgroundColor = color;
  animArea.appendChild(square);
  return square;
}
function startAnimation() {
	let directions = ['left', 'up', 'right', 'down'];
	let dir1 = 0;
	let dir2 = 0;
	step = 1;
	animationInterval = setInterval(() => {
		if (moveSquare(redSquare, directions[dir1])) {
			dir1 = (dir1 + 1) % 4;
		} else {
			dir1 = (dir1 + 2) % 4;
		}
		if (moveSquare(greenSquare, directions[dir2])) {
			dir2 = (dir2 + 1) % 4;
		} else {
			dir2 = (dir2 + 2) % 4;
		}
		if (checkCollision(redSquare, greenSquare)) {
			clearInterval(animationInterval);
			alert('Collision Detected!');
			document.getElementById("reload").disabled = false;
		}
		step += 1;
	}, 50);
}
function moveSquare(square, direction) {
	const pos = square.getBoundingClientRect();
	const animRect = animArea.getBoundingClientRect();
	if (direction === 'right' && pos.right + step <= animRect.right) {
		square.style.left = `${square.offsetLeft + step}px`;
	} else if (direction === 'left' && pos.left - step >= animRect.left) {
		square.style.left = `${square.offsetLeft - step}px`;
	} else if (direction === 'down' && pos.bottom + step <= animRect.bottom) {
		square.style.top = `${square.offsetTop + step}px`;
	} else if (direction === 'up' && pos.top - step >= animRect.top) {
		square.style.top = `${square.offsetTop - step}px`;
	} else {
		return false; // Change direction
	}
	return true;
}
function checkCollision(square1, square2) {
	const rect1 = square1.getBoundingClientRect();
	const rect2 = square2.getBoundingClientRect();
	return (
		rect1.left < rect2.right &&
		rect1.right > rect2.left &&
		rect1.top < rect2.bottom &&
		rect1.bottom > rect2.top
	);
}
