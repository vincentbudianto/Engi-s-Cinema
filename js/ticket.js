function renderTicketInfoContainer(movieTitle, movieDate, movieTime) {
    let ticketInfoContainer = document.getElementsByClassName('ticket-info-container')[0];

    let backIconContainer = document.createElement('div');
    backIconContainer.className = 'back-icon';

    let backIcon = document.createElement('img');
    backIcon.src = "assets/back_icon.png";

    backIconContainer.appendChild(backIcon);

    let ticketInfo = document.createElement('div');
    ticketInfo.className = 'ticket-info';

    let title = document.createElement('label');
    title.id = 'title'
    title.innerHTML = movieTitle;

    let date = document.createElement('label');
    date.id = 'schedule';
    date.innerHTML = movieDate + ' - ' + movieTime;

    ticketInfo.appendChild(title);
    ticketInfo.appendChild(date);

    let errorMsg = document.createElement('span');
    errorMsg.id = 'false-username-msg';
    errorMsg.className = 'input-message';

    ticketInfoContainer.appendChild(backIconContainer);
    ticketInfoContainer.appendChild(ticketInfo);
    ticketInfoContainer.appendChild(errorMsg);
}

function renderSeatSummary(movieTitle, movieDate, movieTime, seatNum) {
    let seatSummary = document.getElementById('seat-summary');

    let title = document.createElement('span');
    title.id = 'summary-title';
    title.innerHTML = movieTitle;


    let schedule = document.createElement('span');
    schedule.id = 'summary-schedule';
    schedule.innerHTML = movieDate + ' - ' + movieTime;

    let summarySeat = document.createElement('div');
    summarySeat.className = 'summary-seat';

    let seatText = document.createElement('span');
    seatText.id = 'seat-text';
    seatText.innerHTML = 'Seat';

    let numberText = document.createElement('span');
    numberText.id = 'number-text';
    numberText.innerHTML = '#' + seatNum;

    let priceText = document.createElement('span');
    priceText.id = 'price-text';
    priceText.innerHTML = 'Rp 45.000';

    summarySeat.appendChild(seatText);
    summarySeat.appendChild(numberText);
    summarySeat.appendChild(priceText);

    let summaryButton = document.createElement('div');
    summaryButton.className = 'summary-button';

    let buyButton = document.createElement('button');
    buyButton.id = 'buy-button';
    buyButton.setAttribute('onclick', 'payment()');
    buyButton.innerHTML = 'Buy Ticket';

    summaryButton.appendChild(buyButton);

    seatSummary.appendChild(title);
    seatSummary.appendChild(schedule);
    seatSummary.appendChild(summarySeat);
    seatSummary.appendChild(summaryButton);
}

function getMovie() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");
    let date = new URLSearchParams(url.search).get("date");
    let time = new URLSearchParams(url.search).get("time");
    let seats = new URLSearchParams(url.search).get("seats");

    let params = "movie=" + id;
    let request = new XMLHttpRequest();
    request.open("GET", "php/title.php" + "?" + params, true);
    request.send()

    request.onload = function() {
        let title = request.response;
        renderTicketInfoContainer(title, date, time);
    }

    let seatsTaken = parseInt(seats, 10);
    for (i = 0; i < seatsTaken; i++) {
        let num = Math.floor(Math.random() * (30-seatsTaken)) + 1;
        let seatID = 'seat-' + num;
        document.getElementById(seatID).value = 0;
        document.getElementById(seatID).style.backgroundColor = '#cccccc';
        document.getElementById(seatID).style.borderColor = '#8f8f8f';
        document.getElementById(seatID).style.color = '#8f8f8f';
    }
}

function select(e) {
    if (e.getAttribute('num') == 1) {
        let url = new URL(window.location.href);
        let id = new URLSearchParams(url.search).get("movie");
        let date = new URLSearchParams(url.search).get("date");
        let time = new URLSearchParams(url.search).get("time");
        let title = "";

        let params = "movie=" + id;
        let request = new XMLHttpRequest();
        request.open("GET", "php/title.php" + "?" + params, true);
        request.send()

        let seat = e.innerHTML;
        document.getElementById('seat-saved').value = seat;

        let seatID = "seat-" + seat;
        document.getElementById(seatID).value = 0;
        document.getElementById(seatID).style.backgroundColor = '#cccccc';
        document.getElementById(seatID).style.borderColor = '#8f8f8f';
        document.getElementById(seatID).style.color = '#8f8f8f';

        document.getElementById('seat-not-selected').style.display = 'none';
        document.getElementById('seat-selected').style.display = 'default';


        request.onload = function() {
            title = request.response;
            renderSeatSummary(title, date, time, seat);
        }
    }
}

function payment() {
    document.getElementById('modal').style.display = 'block';
}

function close() {
    document.getElementById('modal').style.display='none';
}

function insertTransaction() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");
    let date = new URLSearchParams(url.search).get("date");
    let day = date.split(' ')[1];
    let month = date.split(' ')[0];
    let year = date.split(' ')[2];

    switch (month) {
        case "January":
            month = '01';
            break;
        case "February":
            month = '02';
            break;
        case "March":
            month = '03';
            break;
        case "April":
            month = '04';
            break;
        case "May":
            month = '05';
            break;
        case "June":
            month = '06';
            break;
        case "July":
            month = '07';
            break;
        case "August":
            month = '08';
            break;
        case "September":
            month = '09';
            break;
        case "October":
            month = '10';
            break;
        case "November":
            month = '1';
            break;
        case "December":
            month = '12';
            break;
    }

    histDate = year + '-' + month + '-' + day;

    let time = new URLSearchParams(url.search).get("time");

    let request = new XMLHttpRequest();
    request.open("POST", "php/userID.php", true);
    request.send()

    request.onload = function() {
        $userID = request.response;

        let request2 = new XMLHttpRequest();
        let params = "userID=" + $userID + "&movie=" + id + "&date=" + histDate + "&time=" + time;
        request2.open("GET", "php/insertTransaction.php" + "?" + params, true);
        request2.send();

        request2.onload = function() {
            if (request2.response.substr(-3) == '200'){
                window.location.replace('transactions.html');
            }
        }
    }
}

let modal = document.getElementById('modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}