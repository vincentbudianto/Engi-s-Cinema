function changeImage(e) {
    let num = e.getAttribute('num');
    // console.log(num)
    // let rating = document.getElementById('star' + num);
    // console.log(rating.src);

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
    let num = document.getElementById('ratingStar').value;

    for (i = 0; i <= num; i++) {
        document.getElementById('star' + i).src = "assets/star_icon.png";
    }

    for (j = 9; j >= num; j--) {
        document.getElementById('star' + j).src = "assets/star_icon_grey.png";
    }
}

function setRating(e) {
    let num = e.getAttribute('num');
    let ratingSrc = document.getElementById('star' + num).src;
    let ratingValue = Number(document.getElementById('ratingStar').value);

    if (ratingSrc.includes("star_icon.png") && ((Number(num) + 1) == ratingValue)) {
        for (i = 0; i <= 9; i++) {
            document.getElementById('star' + i).src = "assets/star_icon_grey.png";
        }

        document.getElementById('ratingStar').value = 0;
    } else {
        for (i = 0; i <= num; i++) {
            document.getElementById('star' + i).src = "assets/star_icon.png";
        }

        document.getElementById('ratingStar').value = Number(num) + 1;
    }
}

function cancel() {
    window.location.replace('review.html');
}

function submit() {
    let review = document.getElementById('reviewUser').value;
    let request = new XMLHttpRequest();
    request.open("POST", "php/register.php", true);
    request.send(review);

    request.onload = function () {
        switch (request.response.substr(-3)) {
            case '200':
                window.location.replace('review.html');
                break;

            case '201':
                alert('Submission failed');
                break;
        }
    }

    e.preventDefault();
}
