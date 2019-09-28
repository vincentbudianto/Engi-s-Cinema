let userCookie = (document.cookie.match(/^(?:.*;)?\s*user\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (userCookie == null) {
    window.location.replace('login.html');
}

let url = new URL(window.location.href);
let movieID = new URLSearchParams(url.search).get("movie");
document.getElementById('movie-id').value = movieID;
let getData = new FormData(document.forms.reviewForm);
let request = new XMLHttpRequest();

request.open("POST", "php/getMovieData.php", true);
request.send(getData);

request.onload = function () {
    let data = JSON.parse(request.response);
    document.getElementById('title').innerHTML = data.title;
}

function changeImage(e) {
    let num = e.getAttribute('num');

    for (i = 0; i <= num; i++) {
        if (document.getElementById('star' + i).src.includes("star_icon.png")) {
        }
        else {
            document.getElementById('star' + i).src = "assets/star_icon_test.png";
        }
    }

    for (j = 9; j > num; j--) {
        document.getElementById('star' + j).src = "assets/star_icon_grey.png";
    }

    e.addEventListener('mouseout', reset)
}

function reset() {
    let num = document.getElementById('rating-star').value;

    for (i = 0; i <= num; i++) {
        document.getElementById('star' + i).src = "assets/star_icon.png";
    }

    for (j = 9; j >= num; j--) {
        document.getElementById('star' + j).src = "assets/star_icon_grey.png";
    }

    document.getElementById('review-user').value = document.getElementById('review-input').value;
}

function setRating(e) {
    let num = e.getAttribute('num');
    let ratingSrc = document.getElementById('star' + num).src;
    let ratingValue = Number(document.getElementById('rating-star').value);

    if (ratingSrc.includes("star_icon.png") && ((Number(num) + 1) == ratingValue)) {
        for (i = 0; i <= 9; i++) {
            document.getElementById('star' + i).src = "assets/star_icon_grey.png";
        }

        document.getElementById('rating-star').value = 0;
    } else {
        for (i = 0; i <= num; i++) {
            document.getElementById('star' + i).src = "assets/star_icon.png";
        }

        document.getElementById('rating-star').value = Number(num) + 1;
    }

    document.getElementById('review-user').value = document.getElementById('review-input').value;
}

function setReview() {
    document.getElementById('review-input').value = document.getElementById('review-user').value;
}

function cancel() {
    document.getElementById('rating-star').value = 0;
    document.getElementById('review-input').value = "";
    window.location.replace('transactions.html');
}

function addReview(e) {
    let getData = new FormData(document.forms.reviewForm);
    let request = new XMLHttpRequest();
    request.open("POST", "php/review.php", true);
    request.send(getData);

    request.onload = function () {
        switch (request.response.substr(-3)) {
            case '200':
                window.location.replace('transactions.html');
                break;

            case '201':
                alert('Submission failed');
                break;
        }
    }

    e.preventDefault();
}

document.getElementById('reviewForm').addEventListener('submit', addReview);