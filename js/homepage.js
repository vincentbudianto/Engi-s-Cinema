function getUsername() {
    let cookie = document.cookie;

    if (cookie == null || cookie == "") {
        alert("You haven't login");
        window.location.replace('login.html');
    }
    
    let request = new XMLHttpRequest();
    request.open("POST", "php/username.php", true);
    request.send();

    request.onload = function() {
        document.getElementById('username').innerHTML = request.response;
    }
}

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

function getMovies() {
    let request = new XMLHttpRequest();
    request.open("POST", "php/movies.php", true);
    request.send();

    request.onload = function() {
        let movie_list = JSON.parse(request.response)
        for (i = 0; i < movie_list.length; i++) {
            renderMovies(movie_list[i]);
            // let html = "<div class='grid-item'><div class='grid-content'><div class='poster'>";
            // html += "<img src='" + movie_list[i]["poster"] + "'></div></div><div class='grid-content'>";
            // html += "<div class='title'>" + movie_list[i]["title"] + "</div>";
            // html += "<div class='rating'>";
            // html += "<img class='star-img' src='assets/star_icon.png'>";
            // html += "<span class='rating-value'>" + movie_list[i]["rating"] + "</span>";
            // html += "</div></div></div>";
            // document.getElementsByClassName("grid-container")[0].innerHTML += html;
        }
    }
}

function viewDetail(e) {
    id = e.lastElementChild.value;

    // let request = new XMLHttpRequest();
    let params = "movie=" + id;
    // request.open("GET", "php/page.php" + "?" + params, true);
    // request.send(null);

    window.location.replace('detail.html' + "?" + params);

    // request.onload = function() {
    // }
}