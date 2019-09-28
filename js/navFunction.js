let userCookie = (document.cookie.match(/^(?:.*;)?\s*user\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1];

if (userCookie == null) {
	window.location.replace('login.html');
}

let input = document.getElementById('search-input');

//To execute search if enter key pressed on password input
input.addEventListener("keyup", function (event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		document.getElementById("search-icon").click();
	}
});

function search() {
	let params = "search=" + input.value;
	window.location.replace('search.html' + "?" + params);
}

function logout() {
	let request = new XMLHttpRequest();
	request.open("POST", "php/logout.php", true);
	request.send();

	request.onload = function () {
		switch (request.response.substr(-3)) {
			case '200':
				window.location.replace('login.html');
				break;

			case '201':
				alert('Logout failed');
				break;
		}
	}
}