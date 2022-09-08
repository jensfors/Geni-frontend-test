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

	showContent();
});

function validateName (name) {
    if (!name) {
        console.log('Sorry name cannot be empty');
    } else if (!name){

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
