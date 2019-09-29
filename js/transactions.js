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

function renderGridItem(e) {
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    let posterContent = document.createElement('div');
    posterContent.className = 'grid-content';

    let poster = document.createElement('div');
    poster.className = 'poster';

    let posterImg = document.createElement('img');
    posterImg.src = e['poster'];

    poster.appendChild(posterImg);
    posterContent.appendChild(poster);

    let infoContent = document.createElement('div');
    infoContent.className = 'grid-content';

    let history = document.createElement('div');
    history.className = 'history';

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = e['title'];

    let schedule = document.createElement('div');
    schedule.className = 'schedule';

    let scheduleText = document.createElement('span');
    scheduleText.id = 'schedule-text';
    scheduleText.innerHTML = 'Schedule:';

    let scheduleTime = document.createElement('span');
    scheduleTime.id = 'schedule-time';
    scheduleTime.innerHTML = convertDate(e['historyDate']) + ' - ' + e['historyTime'];

    schedule.appendChild(scheduleText);
    schedule.appendChild(scheduleTime);

    let reviewSubmit = document.createElement('span');
    reviewSubmit.className = 'review-submit';
    reviewSubmit.innerHTML = 'Your review has been submitted';

    let reviewButton = document.createElement('div');
    reviewButton.className = 'review-button';

    let deleteReview = document.createElement('button');
    deleteReview.className = 'delete-review';
    deleteReview.innerHTML = 'Delete Review';
    deleteReview.setAttribute('onclick', 'delReview(this)');

    let editReview = document.createElement('button');
    editReview.className = 'edit-review';
    editReview.innerHTML = 'Edit Review';
    editReview.setAttribute('onclick', 'editReview(this)');

    let addReview = document.createElement('button');
    addReview.className = 'add-review';
    addReview.innerHTML = 'Add Review';
    addReview.setAttribute('onclick', 'addReview(this)');

    let date = e['historyDate'] + ' 00:00';
    let showDate = new Date(date);
    let today = new Date();
    let temp = today.getFullYear() + '-' + (today.getMonth()+1) +
    '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes();
    let todayDate = new Date(temp);

    if (e['userReview'] == null) {
        addReview.setAttribute('style', 'display: default;');
        addReview.setAttribute('style', 'background-color: #12abde;');
        addReview.setAttribute('style', 'background-color: #12abde;');
        deleteReview.setAttribute('style', 'display: none;');
        editReview.setAttribute('style', 'display: none;');
    } else {
        addReview.setAttribute('style', 'display: none;');
        deleteReview.setAttribute('style', 'display: default;');
        deleteReview.setAttribute('style', 'background-color: #e31212;');
        editReview.setAttribute('style', 'display: default;');
        editReview.setAttribute('style', 'background-color: #35b056;');
    }

    if (todayDate < showDate) {
        addReview.setAttribute('style', 'display: none;');
        deleteReview.setAttribute('style', 'display: none;');
        editReview.setAttribute('style', 'display: none;');
    }

    reviewButton.appendChild(deleteReview);
    reviewButton.appendChild(editReview);
    reviewButton.appendChild(addReview);

    history.appendChild(title);
    history.appendChild(schedule);
    history.appendChild(reviewSubmit);
    history.appendChild(reviewButton);

    infoContent.appendChild(history);

    gridItem.appendChild(posterContent);
    gridItem.appendChild(infoContent);

    return gridItem;
}

function renderHistory(e) {
    let gridContainer = document.getElementsByClassName('grid-container')[0];
    for (i = 0; i < e.length; i++) {
        gridContainer.appendChild(renderGridItem(e[i]));
    }
}

function getHistory() {
    let request = new XMLHttpRequest();
    request.open("POST", "php/history.php", true);
    request.send();

    request.onload = function() {
        let list = JSON.parse(request.response);
        renderHistory(list);
    }
}

function delReview(e) {
    let parent = e.parentNode.parentNode;
    let title = parent.firstElementChild.innerHTML;

    let params = "title=" + title;
    let request = new XMLHttpRequest();
    request.open("GET", "php/deleteReview.php" + "?" + params, true);
    request.send();

    location.reload();
}

function editReview(e) {
    let parent = e.parentNode.parentNode;
    let title = parent.firstElementChild.innerHTML;
    let params = "title=" + title;

    window.location.replace('review.html' + "?" + params);
}

function addReview(e) {
    let parent = e.parentNode.parentNode;
    let title = parent.firstElementChild.innerHTML;

    let params = "title=" + title;
    window.location.replace("review.html" + "?" + params);
}