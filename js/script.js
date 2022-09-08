function myFunction(e) {
	document.getElementById('demo').innerHTML = 'Paragraph changed.';
}

const paymentForm = document.querySelector('[name="payment-form"]');
console.log(paymentForm);

console.log('hello there');
paymentForm.addEventListener('submit', function (e) {
	// Could add extra validation here, but not sure which value it adds
	// since final validation should happen on the server

	console.log('submitted the form');
	console.log(e);
	e.preventDefault();

	const cardNumber = e.currentTarget.cardNumber.value;
	console.log(cardNumber);
	// check if it long enough or something

	showContent();
});
var wrapper = document.getElementById('wrapper');

function showContent() {
	console.log('do we get here???');
	// var temp = document.getElementsByTagName('template')[0];
	// var clon = temp.content.cloneNode(true);
	// let form = document.getElementById('form-template');
	let confirm = document.getElementById('confirm-template');
	// var wrapper = document.getElementById('wrapper');
	// let submit = document.querySelector('[name="confirm"]');
	console.log(confirm);
	// console.log(submit);
	// console.log(form);
	paymentForm.remove();
	confirm.style.display = 'flex';

	// wrapper?.appendChild(clon);
	// submit?.parentNode?.insertBefore(clon, submit);
	// document.submit.appendChild(clon);
	// document.body.appendChild(clon);
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
