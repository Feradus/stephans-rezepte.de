document.querySelectorAll('.adjust-amount__change').forEach((button) => {
	button.addEventListener('click', adjustAmountButton);
});
const input = document.querySelector('.adjust-amount__portions');

function adjustAmountButton(event) {
	const button = event.target;
	let currentAmount = parseInt(input.innerHTML, 10);

	if (button.classList.contains('decrease')) {
		input.innerHTML = currentAmount - 1;
	} else {
		input.innerHTML = currentAmount + 1;
	}
	let newIngridientsRatio = parseFloat(input.innerHTML / currentAmount);
	updateIngridientsAmount(newIngridientsRatio);
}

function updateIngridientsAmount(newIngridientsRatio) {
	let ingridientAmount = document.querySelectorAll('.ingridient__amount');

	ingridientAmount.forEach((ingridient) => {
			let originalAmount = parseFloat(ingridient.textContent);
			let newAmount = (originalAmount * newIngridientsRatio).toFixed(2);
			if (newAmount.endsWith('.00')) {
				newAmount = parseInt(newAmount);
			}
			ingridient.textContent = newAmount;
	});
}
