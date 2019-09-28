function changeBackButton(e) {
    if (e == 0) {
        document.getElementById('back-button').style.color = '#a6a6a6';
        document.getElementById('back-button').style.borderColor = '#a6a6a6';
        document.getElementById('back-button').disabled = true;
    } else {
        document.getElementById('back-button').style.color = '#12abde';
        document.getElementById('back-button').style.borderColor = '#12abde';
        document.getElementById('back-button').disabled = false;
    }
}

function changeNextButton(e) {
    if (e == 0) {
        document.getElementById('next-button').style.color = '#a6a6a6';
        document.getElementById('next-button').style.borderColor = '#a6a6a6';
        document.getElementById('next-button').disabled = true;
    } else {
        document.getElementById('next-button').style.color = '#12abde';
        document.getElementById('next-button').style.borderColor = '#12abde';
        document.getElementById('next-button').disabled = false;
    }
}

function changePage(e) {
    let destinationPage = e.getAttribute('num');
    if (destinationPage == 1) {
        changeBackButton(0);
    } else {
        changeBackButton(1);
    }

    let pages = document.getElementsByClassName('page-button')
    let totalPages = pages.length;
    for (i = 0; i < totalPages; i++) {
        pages[i].style.color = '#12abde';
        pages[i].style.borderColor = '#12abde';
    }

    if (destinationPage == totalPages) {
        changeNextButton(0);
    } else {
        changeNextButton(1);
    }

    pages[destinationPage - 1].style.color = '#a6a6a6';
    pages[destinationPage - 1].style.borderColor = '#a6a6a6';

    document.getElementById('current-page').value = destinationPage;
}

function onePage(e) {
    let currentPage = document.getElementById('current-page').value;
    let destinationPage = parseInt(currentPage, 10) + parseInt(e, 10);

    if (destinationPage == 1) {
        changeBackButton(0);
    } else {
        changeBackButton(1);
    }

    let pages = document.getElementsByClassName('page-button')
    let totalPages = pages.length;
    for (i = 0; i < totalPages; i++) {
        pages[i].style.color = '#12abde';
        pages[i].style.borderColor = '#12abde';
    }

    if (destinationPage == totalPages) {
        changeNextButton(0);
    } else {
        changeNextButton(1);
    }

    pages[destinationPage - 1].style.color = '#a6a6a6';
    pages[destinationPage - 1].style.borderColor = '#a6a6a6';

    document.getElementById('current-page').value = destinationPage;
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

function getMovie() {
    let url = new URL(window.location.href);
    let input = new URLSearchParams(url.search).get("search");
    let request = new XMLHttpRequest();
    let params = "search=" + input;

    request.open("GET", "php/searchFunction.php" + "?" + params, true);
    request.send();

    request.onload = function () {
        data = JSON.parse(request.response);

        for (i = 0; i < data.length; i++) {
            renderMovies(movie_list[i]);
        }
    }
}

if (document.getElementById('current-page').value == 1) {
    changeBackButton(0);
    document.getElementsByClassName('page-button')[0].style.color = '#a6a6a6';
    document.getElementsByClassName('page-button')[0].style.borderColor = '#a6a6a6';
} else {
    changeBackButton(1);
}

if (document.getElementById('current-page').value == document.getElementsByClassName('page-button').length) {
    changeNextButton(0);
    document.getElementsByClassName('page-button')[-1].style.color = '#a6a6a6';
    document.getElementsByClassName('page-button')[-1].style.borderColor = '#a6a6a6';
} else {
    changeNextButton(1);
}