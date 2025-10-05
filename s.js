let button = document.getElementById("button");
let message = document.getElementById("message");
let again = document.getElementById("again");
let area = document.getElementById("area");

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
	area.style.backgroundColor = "";
	document.getElementById("timer").innerHTML = timer = 5;
	document.getElementById("score").innerHTML = "00";
};
function checkBest(){
	if(score > best){
		best = score;
		document.getElementById("best").innerHTML = String(best).padStart(2, "0");
	};
};
function click(){
	if (clickable){
		if (!clickedOnce){
			clickedOnce = true;
			clearTimers();
			interval = setInterval(() => {
				if (timer > 0){
					document.getElementById("timer").innerHTML = --timer;
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
			}, 5000);
		};
		document.getElementById("score").innerHTML = String(++score).padStart(2, "0");
		let colors = {
			10: "#80c0c0",
			20: "#80c080",
			30: "#c080c0",
			40: "#c08080",
			50: "#8080c0"
		};
		if (colors[score]){
			area.style.backgroundColor = colors[score];
		};
	};
};

button.addEventListener("click", click);
again.addEventListener("click", tryAgain);

document.addEventListener("keydown", (e) => {
	if (e.code === "Space") tryAgain();
	if (e.code === "KeyP") click();
});

//let x = 36;
console.log(0.3 + 0.6 == 0.8999999999999999);
