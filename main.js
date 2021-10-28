let decreaseButton = document.getElementById('decrease');
let resetButton = document.getElementById('reset');
let increaseButton = document.getElementById('increase');
let outputField = document.getElementById('outputNumber');
let startingNumber = 0
outputField.value = startingNumber

decreaseButton.addEventListener('click', function() {
	startingNumber = startingNumber - 1;
	outputField.value = startingNumber;
})

resetButton.addEventListener('click', function() {
	startingNumber = 0;
	outputField.value = startingNumber;
})

increaseButton.addEventListener('click', function() {
	startingNumber = startingNumber + 1;
	outputField.value = startingNumber;
})

