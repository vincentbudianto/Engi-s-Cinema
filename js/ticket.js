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

    console.log(title);

    let schedule = document.createElement('span');
    schedule.id = 'summary-schedule';
    schedule.innerHTML = movieDate + ' - ' + movieTime;

    console.log(schedule);

    let summarySeat = document.createElement('div');
    summarySeat.className = 'summary-seat';

    let seatText = document.createElement('span');
    seatText.id = 'seat-text';
    seatText.innerHTML = 'Seat';

    console.log(seatText);

    let numberText = document.createElement('span');
    numberText.id = 'number-text';
    numberText.innerHTML = '#' + seatNum;

    console.log(numberText);

    let priceText = document.createElement('span');
    priceText.id = 'price-text';
    priceText.innerHTML = 'Rp 45.000';

    console.log(priceText);

    summarySeat.appendChild(seatText);
    summarySeat.appendChild(numberText);
    summarySeat.appendChild(priceText);

    console.log(summarySeat);

    let summaryButton = document.createElement('div');
    summaryButton.className = 'summary-button';

    let buyButton = document.createElement('button');
    buyButton.id = 'buy-button';
    buyButton.setAttribute('onclick', 'payment()');
    buyButton.innerHTML = 'Buy Ticket';

    console.log(buyButton)

    summaryButton.appendChild(buyButton);

    console.log(summaryButton);

    seatSummary.appendChild(title);
    seatSummary.appendChild(schedule);
    seatSummary.appendChild(summarySeat);
    seatSummary.appendChild(summaryButton);

    console.log(seatSummary);
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
        let num = Math.floor(Math.random() * 30) + 1;
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

let modal = document.getElementById('modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}