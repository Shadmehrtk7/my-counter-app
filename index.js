let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
	count += 1;
	countEl.innerText = count;
}


let saveEl = document.getElementById("saved-el");

function save() {
	let container = count + " - ";
	saveEl.textContent += container;
	count = 0;
	countEl.innerText = count;
}
