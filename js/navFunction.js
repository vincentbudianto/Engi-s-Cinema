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

// window.onload() = function () {
// 	curr = 1;
// 	this.search(event);
// }
function renderMovies(e) {
	let container = document.getElementsByClassName("grid-container")[0];

	let item = document.createElement('div');
	item.className = 'grid-item';
	item.setAttribute('onclick', 'viewDetail(this)');

	let contentPoster = document.createElement('div');
	contentPoster.className = 'grid-content';

	let poster = document.createElement('div');
	poster.className = 'poster';

	let posterImage = document.createElement('img');
	posterImage.src = e['poster'];

	poster.appendChild(posterImage);
	contentPoster.appendChild(poster);
	item.appendChild(contentPoster);

	let contentInfo = document.createElement('div');
	contentInfo.className = 'grid-content';

	let title = document.createElement('div');
	title.className = 'title';
	title.innerHTML = e['title'];

	let rating = document.createElement('div');
	rating.className = 'rating';

	let starIcon = document.createElement('img');
	starIcon.src = "assets/star_icon.png";

	let ratingValue = document.createElement('span');
	ratingValue.className = 'rating-value';
	ratingValue.innerHTML = e['rating'];

	rating.appendChild(starIcon);
	rating.appendChild(ratingValue);
	contentInfo.appendChild(title);
	contentInfo.appendChild(rating);

	item.appendChild(contentInfo);

	let target = document.createElement('input');
	target.type = 'hidden';
	target.className = 'target-movie';
	target.name = 'target-movie';
	target.value = e['movieID'];

	item.appendChild(target);
	container.appendChild(item);
}

function search() {
	let request = new XMLHttpRequest();
	let params = "search=" + input.value;

	request.open("GET", "php/searchFunction.php" + "?" + params, true);
	request.send();

	request.onload = function () {
		data = JSON.parse(request.response);

		for (i = 0; i < data.length; i++) {
			renderMovies(movie_list[i]);
		}
	}
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