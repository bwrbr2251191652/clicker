let button = document.getElementById("button");
let message = document.getElementById("message");
let timer = 5;
let score = 0;
let clickable = true;
let clickedOnce = false;

button.addEventListener("click", () => {
	if(clickable === true){
		document.getElementById("score").innerHTML = ++score;
		setTimeout(() => {
			clickable = false;
			message.innerHTML = "You have clicked "+score+" times!"
		},
		5000);
		if(clickedOnce === false){
			clickedOnce = true;
			setInterval(() => {
				if(timer !== 0){
					document.getElementById("timer").innerHTML = --timer+" seconds left";
				};
			},
			1000);
		};
	};
});