function myFunction(e) {
	document.getElementById('demo').innerHTML = 'Paragraph changed.';
}

const paymentForm = document.querySelector('[name="payment-form"]');
console.log(paymentForm);

paymentForm.addEventListener('submit', function (e) {
	// Could add extra validation here, but not sure which value it adds
	// since final validation should happen on the server

	console.log('submitted the form');
	console.log(e);
	e.preventDefault();
	// validation steps
	const name = e.currentTarget.name.value;
	const cardNumber = e.currentTarget.cardNumber.value;
	const expirationMonth = e.currentTarget.expirationMonth.value;
	const expirationYear = e.currentTarget.expirationYear.value;
	const cvc = e.currentTarget.cvc.value;

	console.log('name', name);
	console.log('cardnumber', cardNumber);
	console.log('expiration month', expirationMonth);
	console.log('expiration year', expirationYear);
	console.log('expiration cvc', cvc);

	validateExpirationMonth(expirationMonth);
	validateCVC(cvc);
	showContent();
});

function validateExpirationMonth(expirationMonth) {
	console.log('expiration month: ', expirationMonth);
	console.log('expiration month: ', expirationMonth.length);

	if (expirationMonth.length < 2) {
		console.log('expirationMonth error: ', expirationMonth);
		errMessage = 'Need at least 2 characters';
		// TODO: Set error text on paragrap with error message
		return;
	} else if (expirationMonth < 1 || expirationMonth > 12) {
		console.log('expirationMonth error 2: ', expirationMonth);
		errMessage = 'Value has to be between 1 and 12';
		// TODO: Set error text on paragrap with error message
		return;
	}

	console.log('wuuuhu expiration month passed');
}

function validateCVC(cvc) {
	console.log('cvc: ', cvc.length);
	let errMessage = 'No Error';
	if (cvc.length < 3) {
		console.log('cvc error: ', cvc);
		errMessage = 'Need at least 3 characters';
		// TODO: Set error text on paragrap with error message
		return;
	}
	console.log('wuuuhu cvc passed');
}

function validateName(name) {
	if (!name) {
		console.log('Sorry name cannot be empty');
	} else if (!name) {
	}
}

var wrapper = document.getElementById('wrapper');

function showContent() {
	let confirm = document.getElementById('confirm-template');
	paymentForm.remove();
	confirm.style.display = 'flex';
}

function showForm() {
	console.log('showForm daddy');
	let confirm = document.getElementById('confirm-template');
	confirm.style.display = 'none';
	wrapper?.appendChild(paymentForm);
	paymentForm.reset();
}

function onlyNumberKey(e) {
	if (isNaN(e.key)) return false;
	return true;
}

function onlyCharKey(e) {
	if (!isNaN(e.key)) return false;
	return true;
}
