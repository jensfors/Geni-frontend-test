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

	validateExpirationYear(expirationYear);
	validateExpirationMonth(expirationMonth);
	validateCVC(cvc);
	// showContent();
});

function validateExpirationMonth(expirationMonth) {
	let input = document.getElementById('expirationMonth');
	let error = document.getElementById('expError');

	if (expirationMonth.length < 2) {
		input?.classList.add('input-error');
		error.innerHTML = 'Has to be 2 numbers';

		return;
	} else if (expirationMonth < 1 || expirationMonth > 12) {
		input?.classList.add('input-error');
		error.innerHTML = 'MM has to be between 1 and 12';

		return;
	}

	input.classList.remove('input-error');
	error.innerHTML = '';
}

function validateExpirationYear(expirationYear) {
	let input = document.getElementById('expirationYear');
	let error = document.getElementById('expError');

	if (expirationYear.length < 2) {
		input?.classList.add('input-error');
		error.innerHTML = 'Has to be 2 numbers';

		return;
	}

	input.classList.remove('input-error');
	error.innerHTML = '';
}

function validateCVC(cvc) {
	let input = document.getElementById('cvc');
	let error = document.getElementById('cvcError');

	if (cvc.length < 3) {
		input?.classList.add('input-error');
		error.innerHTML = 'Has to be 3 numbers';

		return;
	}

	input.classList.remove('input-error');
	error.innerHTML = '';
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

// This could be made more resilient with checking ASCII character
// to eliminate the possibility that the user enters characters
// like ,./(){}[]!@#$%^&*_
// !! But be aware a name could be: Jens-Nicolaj Andersen
function onlyCharKey(e) {
	if (!isNaN(e.key)) return false;
	return true;
}
