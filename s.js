const board = document.getElementById("board");
const squares = [];
let lastPiece = null;
let lastSquare = null;
let piece;
let square;

let position = [
	["br", "bk", "be", "bK", "bq", "be", "bk", "br"],
	["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["p", "p", "p", "p", "p", "p", "p", "p"],
	["r", "k", "e", "q", "K", "e", "k", "r"],
]

board.addEventListener("mousedown", mousedown);
board.addEventListener("contextmenu", event => event.preventDefault());

for(let i = 0; i < 8; i++){
	for(let j = 0; j < 8; j++){
		square = document.createElement("div");
		square.classList.add("square");
		if((i + j) % 2 !== 0){
			square.classList.add("dark");
		}
		square.textContent = position[i][j];
		if(position[i][j].includes("b")){
			square.classList.add("black");
			square.classList.add("opp");
		}
		squares.push(square);
		board.appendChild(square);
	}
}
squares[36].innerHTML = "";

function mousedown(event){
	let square = event.target;
	if(!square.classList.contains("square")) return;
	if(square.textContent !== "" && !lastPiece){
		lastPiece = square.textContent;
		lastSquare = square;
		square.classList.add("selected");
	}
	else if((square.textContent === "" || square.classList.contains("opp") !== lastSquare.classList.contains("opp")) && lastPiece){
		square.classList.remove("black", "opp");
		square.textContent = lastPiece;
		if(lastPiece.includes("b")) square.classList.add("black", "opp");
		lastPiece = null;
		if(lastSquare){
			lastSquare.textContent = "";
			lastSquare.classList.remove("selected", "black", "opp");
			lastSquare = null;
		}
	}
	else{
		if(lastSquare) lastSquare.classList.remove("selected");
		lastPiece = null;
		lastSquare = null;
	}
}