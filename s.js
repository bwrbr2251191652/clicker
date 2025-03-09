let button = document.getElementById("button");
let message = document.getElementById("message");
let again = document.getElementById("again");

let timer = 5;
let score = 0;
let best = 0;
let clickable = true;
let clickedOnce = false;
let interval = null;
let timeout = null;

function clearTimers(){
	clearInterval(interval);
	clearTimeout(timeout);
	interval = null;
	timeout = null;
};
function tryAgain(){
	clearTimers();
	again.hidden = true;
	message.innerHTML = "Click!";
	clickable = true;
	clickedOnce = false;
	button.style.cursor = "";
	score = 0;
	document.getElementById("timer").innerHTML = timer = 5;
	document.getElementById("score").innerHTML = "00";
};
function checkBest(){
	if(score > best){
		best = score;
		score < 10
			? document.getElementById("best").innerHTML = `0${best}`
			: document.getElementById("best").innerHTML = best
	};
};

button.addEventListener("click", click);

function click(){
	if (clickable === true){
		if (!clickedOnce){
			clickedOnce = true;
			clearTimers();
			interval = setInterval(() => {
				if (timer > 0){
					document.getElementById("timer").innerHTML = --timer;
					// message.style.color = "#ff0080";
				};
			}, 1000);
			timeout = setTimeout(() => {
				clickable = false;
				score === 1
					? message.innerHTML = `You have clicked ${score} time!`
					: message.innerHTML = `You have clicked ${score} times!`;
				checkBest();
				again.hidden = false;
				button.style.cursor = "auto";
				// message.style.color = "";
			}, 5000);
		};
		score < 9
			? document.getElementById("score").innerHTML = `0${++score}`
			: document.getElementById("score").innerHTML = ++score
	};
};
again.addEventListener("click", tryAgain);
document.addEventListener("keydown", (e) => {
	e.code === "Space" ? tryAgain() : null;
});
document.addEventListener("keydown", (e) => {
	e.code === "KeyP" ? click() : null;
});