/*----------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------Created by github.com/Deagleci------------------------
-----------------------------All Rights Reserved------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
*/
const registerForm = document.getElementById('register-form');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const email = document.getElementById('email').value;
	const name = document.getElementById('name').value;
	const surname = document.getElementById('surname').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;

	if (password !== confirmPassword) {
		showError('Passwords do not match');
		return;
	}


	window.location.href = 'login.html';
});

function showError(message) {
	errorMessage.innerText = message;
	errorMessage.style.display = 'block';
}
/*----------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------Created by github.com/Deagleci------------------------
-----------------------------All Rights Reserved------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
*/