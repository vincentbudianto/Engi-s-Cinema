function convertDate(e) {
    let tempDate = e.split('-');
    let month = tempDate[1];
    let day = tempDate[2];
    let year = tempDate[0];

    switch (month) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
    }

    if (day[0] == '0') {
        day = day.substr(-1);
    }

    let date = month + " " + day + " " + year;
    return date;
}

function renderTop(e) {
    let itemTop = document.getElementsByClassName("grid-item-top")[0];;

    let poster = document.createElement('div');
    poster.className = 'poster';

    let posterImg = document.createElement('img');
    posterImg.src = e['poster'];

    poster.appendChild(posterImg);
    itemTop.appendChild(poster);

    let movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';

    let title = document.createElement('label');
    title.className = 'title';
    title.innerHTML = e['title'];

    let genreDuration = document.createElement('label');
    genreDuration.className = 'genre-duration';
    genreDuration.innerHTML = e['genre'];

    let separator = document.createElement('label');
    separator.innerHTML = ' | ';

    let duration = document.createElement('label');
    duration.className = 'duration';
    duration.innerHTML = e['duration'] + ' mins';

    genreDuration.appendChild(separator);
    genreDuration.appendChild(duration);

    let release = document.createElement('label');
    release.className = 'release';
    release.innerHTML = 'Release date: ';

    let date = document.createElement('span');
    date.className = 'date';

    date.innerHTML = convertDate(e['date']);
    release.appendChild(date);

    let ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating-container';

    let starIcon = document.createElement('img');
    starIcon.src = "assets/star_icon.png";

    let rating = document.createElement('label');
    rating.className = 'rating';
    rating.innerHTML = e['rating'] + " ";

    let outTen = document.createElement('span');
    outTen.className = 'out-ten';
    outTen.innerHTML = '/10';

    rating.appendChild(outTen);
    ratingContainer.appendChild(starIcon);
    ratingContainer.appendChild(rating);

    let descContainer = document.createElement('div');
    descContainer.className = 'desc-container';

    let desc = document.createElement('p');
    desc.className = 'desc';
    desc.innerHTML = e['description'];

    descContainer.appendChild(desc);

    movieInfo.appendChild(title);
    movieInfo.appendChild(genreDuration);
    movieInfo.appendChild(release);
    movieInfo.appendChild(ratingContainer);
    movieInfo.appendChild(descContainer);

    itemTop.appendChild(movieInfo);
}

function renderScheduleItemContent(e) {
    let scheduleItemContent = document.createElement('div');
    scheduleItemContent.className = 'schedule-item-content';

    let date = document.createElement('div');
    date.className = 'schedule-item-date';
    date.innerHTML = convertDate(e['scheduleDate']);

    let time = document.createElement('div');
    time.className = 'schedule-item-time';
    time.innerHTML = e['scheduleTime'];

    let seats = document.createElement('div');
    seats.className = 'schedule-item-seats';

    let seatsAvailable = document.createElement('span');
    seatsAvailable.className = 'seats-available';
    seatsAvailable.innerHTML = e['seat'] + ' seats';

    seats.appendChild(seatsAvailable);

    let status = document.createElement('div');
    status.className = 'schedule-item-status';

    let available = document.createElement('label');
    available.className = 'available';
    if (parseInt(e['seat'], 10) > 0) {
        available.setAttribute('style', 'color: #12abde;');
        available.innerHTML = 'Book Now';
        status.setAttribute('onclick', 'book(this)');
    } else {
        available.setAttribute('style', 'color: #e31212;');
        available.innerHTML = 'Not Available';
    }

    let availableIcon = document.createElement('img');
    availableIcon.className = 'available-icon';
    if (parseInt(e['seat'], 10) > 0) {
        availableIcon.src = 'assets/next_icon.png';
    } else {
        availableIcon.src = 'assets/unavailable_icon.png';
    }

    status.appendChild(available);
    status.appendChild(availableIcon);

    scheduleItemContent.appendChild(date);
    scheduleItemContent.appendChild(time);
    scheduleItemContent.appendChild(seats);
    scheduleItemContent.appendChild(status);

    return scheduleItemContent;
}

function renderScheduleItem(e) {
    let scheduleItem = document.createElement('div');
    scheduleItem.className = 'schedule-item';

    for (i = 0; i < e.length; i++) {
        scheduleItem.append(renderScheduleItemContent(e[i]));
    }

    return scheduleItem;
}

function renderScheduleContainer(e) {
    let scheduleContainer = document.getElementsByClassName('schedule-container')[0];

    let schedule = document.createElement('div');
    schedule.className = 'schedule';

    let bottomTitle = document.createElement('label');
    bottomTitle.className = 'bottom-title';
    bottomTitle.innerHTML = 'Schedules';

    let scheduleContent = document.createElement('div');
    scheduleContent.className = 'schedule-content';

    let scheduleItemHeader = document.createElement('div');
    scheduleItemHeader.className = 'schedule-item-header';

    let date = document.createElement('div');
    date.className = 'schedule-title';
    date.innerHTML = 'Date';

    let time = document.createElement('div');
    time.className = 'schedule-title';
    time.innerHTML = 'Time';

    let seats = document.createElement('div');
    seats.className = 'schedule-title';
    seats.innerHTML = 'Available Seats';

    scheduleItemHeader.appendChild(date);
    scheduleItemHeader.appendChild(time);
    scheduleItemHeader.appendChild(seats);

    scheduleContent.appendChild(scheduleItemHeader);
    scheduleContent.appendChild(renderScheduleItem(e));

    schedule.appendChild(bottomTitle);
    schedule.appendChild(scheduleContent);

    scheduleContainer.appendChild(schedule);
}

function renderReviewItem(e) {
    let reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';

    let profile = document.createElement('div');
    profile.className ='profile';

    let profilePic = document.createElement('img');
    profilePic.className = 'profile-pic';
    profilePic.src = e['profilePicture'];

    profile.appendChild(profilePic);

    let userReview = document.createElement('div');
    userReview.className = 'user-review';

    let uname = document.createElement('label');
    uname.className = 'uname';
    uname.innerHTML = e['username'];

    let userRating = document.createElement('div');
    userRating.className = 'user-rating';

    let starIcon = document.createElement('img');
    starIcon.className = 'rating-star';
    starIcon.src = 'assets/star_icon.png';

    let ratingValueContainer = document.createElement('label');
    ratingValueContainer.className = 'rating-value-container';
    ratingValueContainer.innerHTML = e['userRate'];

    let outTen = document.createElement('span');
    outTen.className = 'rating-out-10';
    outTen.innerHTML = ' /10';

    ratingValueContainer.appendChild(outTen);

    userRating.appendChild(starIcon);
    userRating.appendChild(ratingValueContainer);

    let userReviewContainer = document.createElement('div');
    userReviewContainer.className = 'user-review-container';

    let userReviewContent = document.createElement('p');
    userReviewContent.className = 'user-review-content';
    userReviewContent.innerHTML = e['userReview']

    userReviewContainer.appendChild(userReviewContent);

    userReview.appendChild(uname);
    userReview.appendChild(userRating);
    userReview.appendChild(userReviewContainer);

    reviewItem.appendChild(profile);
    reviewItem.appendChild(userReview);

    return reviewItem;
}

function renderReviewContent(e) {
    let reviewContent = document.createElement('div');
    reviewContent.className = 'review-content';

    for (i = 0; i < e.length; i++) {
        reviewContent.append(renderReviewItem(e[i]));
    }

    return reviewContent;
}

function renderReviewContainer(e) {
    let reviewContainer = document.getElementsByClassName('review-container')[0];

    let review = document.createElement('div');
    review.className = 'review';

    let bottomTitle = document.createElement('label');
    bottomTitle.className = 'bottom-title';
    bottomTitle.innerHTML = 'Review';

    review.appendChild(bottomTitle);
    review.appendChild(e);

    reviewContainer.appendChild(review);
}

function renderPage(e) {
    renderTop(e);

    let params1 = "id=" + e['movieID'];
    let request1 = new XMLHttpRequest();
    request1.open("GET", "php/getMovieSchedule.php" + "?" + params1, true);
    request1.send();

    request1.onload = function() {
        let schedule = JSON.parse(request1.response);
        renderScheduleContainer(schedule);
    }

    let params2 = "id=" + e['movieID'];
    let request2 = new XMLHttpRequest();
    request2.open("GET", "php/getMovieReview.php" + "?" + params2, true);
    request2.send();

    request2.onload = function() {
        let review = JSON.parse(request2.response);
        let reviewContent = renderReviewContent(review);
        renderReviewContainer(reviewContent);
    }
}

function getMovie() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");

    let params = "id=" + id;
    let request = new XMLHttpRequest();
    request.open("GET", "php/movieDetail.php" + "?" + params, true);
    request.send();

    request.onload = function() {
        let movie = JSON.parse(request.response);
        renderPage(movie);
    }
}

function book(e) {
    let parent = e.parentNode;
    children = parent.children;

    let date = children[0].innerHTML;
    let time = children[1].innerHTML;
    let seats = children[2].firstElementChild.innerHTML.split(" ")[0];
    let params = "date=" + date + "&time=" + time + "&seats=" + seats;

    window.location.replace('ticket.html' + "?" + params);
}