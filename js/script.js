// Global variables
const PAYMENT_FORM = document.querySelector('[name="payment-form"]');
const WRAPPER = document.getElementById('wrapper');
let ERROR_IN_FORM = false;


// All logic that happens when submitting the form
PAYMENT_FORM.addEventListener('submit', function (e) {
	e.preventDefault();
	ERROR_IN_FORM = false;
	const name = e.currentTarget.name.value;
	const cardNumber = e.currentTarget.cardNumber.value;
	const expirationMonth = e.currentTarget.expirationMonth.value;
	const expirationYear = e.currentTarget.expirationYear.value;
	const cvc = e.currentTarget.cvc.value;

	// Basic form validation
	// Real validation should happen on the server
	validateExpirationMonth(expirationMonth);
	validateExpirationYear(expirationYear);
	validateCVC(cvc);

	// Hide the form and show the confirmed state
    // if there is no errors
	if (!ERROR_IN_FORM) showConfirmed();
});


function showConfirmed() {
	let confirm = document.getElementById('confirm-template');
	PAYMENT_FORM.remove();
	confirm.style.display = 'flex';
}


function showForm() {
	// Hide confirm state
	let confirm = document.getElementById('confirm-template');
	confirm.style.display = 'none';

	// Show the form again after confirming
	WRAPPER?.appendChild(PAYMENT_FORM);
	PAYMENT_FORM.reset();
}


function validateExpirationMonth(expirationMonth) {
	let input = document.getElementById('expirationMonth');
	let error = document.getElementById('expError');

	if (expirationMonth.length < 2) {
		ERROR_IN_FORM = true;
		input?.classList.add('input-error');
		error.innerHTML = 'Has to be 2 numbers';

		return;
	} else if (expirationMonth < 1 || expirationMonth > 12) {
		ERROR_IN_FORM = true;
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
		ERROR_IN_FORM = true;
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
		ERROR_IN_FORM = true;
		input?.classList.add('input-error');
		error.innerHTML = 'Has to be 3 numbers';

		return;
	}

	input.classList.remove('input-error');
	error.innerHTML = '';
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
