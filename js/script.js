let onAnswer = false;
let displayBox = document.getElementById("calc-display");
let expressionDisplay = document.getElementById("expression-display");
const operators = ["button-div", "button-multi", "button-sub", "button-plus"];

function appendToDisplay(event) {
	
	btn = event.target;
	
	//If thing clicked doesn't have this class, don't do anything
	if (!btn.classList.contains("calc-button")) return;
	
	if (btn.id === "button-equal") {
		console.log(expressionDisplay.innerHTML);
		let answer = math.evaluate(displayBox.innerHTML);
		
		//Make expression visible and display answer
		expressionDisplay.innerHTML = displayBox.innerHTML + ` = ${answer}`;
		displayBox.innerHTML = answer;
		onAnswer = true;
		return
	}
	
	// Clears display if typing when answer is displayed
	if (displayBox.innerHTML === "0" || onAnswer === true) {
		
		// Don't clear display if pressing an operator
		if (operators.includes(btn.id)) {
			onAnswer = false;
		}
		
		// Clear if typing a number when answer is there
		else {
		displayBox.innerHTML = " ";
		onAnswer = false;
		};
	}
	
	if (btn.id === "button-c") {
		displayBox.innerHTML = "0";
		return
	}
	
	if (btn.id === "button-backspace") {
		//Prevents displaybox from going completely blank
		if (displayBox.innerHTML.length === 1) {
			displayBox.innerHTML = "0";
			return;
			};
		
		displayBox.innerHTML = displayBox.innerHTML.slice(0, -1);
		return
	}
	
	
	btnText = btn.textContent;
	displayBox.innerHTML += btnText;
}

function clickButton(id) {
	document.getElementById(id).click();
}



grid = document.getElementById("calc-button-grid");
grid.addEventListener("click", appendToDisplay);

// Mapping keyboard buttons
document.addEventListener("keydown", (event) => {
	
	key = event.key;
	console.log(`${key}`);
	
	if (key === "Backspace") {clickButton("button-backspace");};
	
	if (key === "c") {clickButton("button-c");};
	
	if (key === "/") {
		event.preventDefault();
		clickButton("button-div");
	};
	
	if (key === "=" || key === "Enter") {
		event.preventDefault();
		clickButton("button-equal");
	};
	
	if (key === "*") {clickButton("button-multi");};
	if (key === "-") {clickButton("button-sub");};
	
	if (key === "7") {clickButton("button-7");};
	if (key === "8") {clickButton("button-8");};
	if (key === "9") {clickButton("button-9");};
	if (key === "+") {clickButton("button-plus");};
	
	if (key === "4") {clickButton("button-4");};
	if (key === "5") {clickButton("button-5");};
	if (key === "6") {clickButton("button-6");};
	
	
	if (key === "1") {clickButton("button-1");};
	if (key === "2") {clickButton("button-2");};
	if (key === "3") {clickButton("button-3");};
	if (key === "0") {clickButton("button-0");};
})
/*
let display = "";

let expression = "";
*/
