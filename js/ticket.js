function convertDateToFormat(e) {
    let day = e.split(' ')[1];
    let month = e.split(' ')[0];
    let year = e.split(' ')[2];

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
    return histDate;
}

function renderTicketInfoContainer(movieID, movieTitle, movieDate, movieTime) {
    let ticketInfoContainer = document.getElementsByClassName('ticket-info-container')[0];

    let backIconContainer = document.createElement('div');
    backIconContainer.className = 'back-icon';

    let backIcon = document.createElement('img');
    let link = "location.href = 'detail.html?movie=" + movieID + "'";
    backIcon.src = "assets/back_icon.png";
    backIcon.setAttribute("onclick", link);

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
    let seatSummary = document.createElement('span');
    seatSummary.id = 'seat-summary';

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

    return seatSummary;
}

function getSeatInfo() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");
    let date = new URLSearchParams(url.search).get("date");
    let histDate = convertDateToFormat(date);
    let time = new URLSearchParams(url.search).get("time");

    let params = "movie=" + id + "&date=" + histDate + "&time=" + time;
    let request = new XMLHttpRequest();
    request.open("GET", "php/ticket.php" + "?" + params, true);
    request.send()

    request.onload = function() {
        let seats = JSON.parse(request.response);
        for (i = 0; i < 30; i++) {
            let id = "seat-" + seats[i]["seatNo"];
            document.getElementById(id).setAttribute("value", seats[i]["filled"]);
            if(seats[i]["filled"] == 0) {
                document.getElementById(id).style.backgroundColor = '#cccccc';
                document.getElementById(id).style.borderColor = '#8f8f8f';
                document.getElementById(id).style.color = '#8f8f8f';
            }
        }
    }
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
        renderTicketInfoContainer(id, title, date, time);
    }
}

function select(e) {
    if (document.getElementById("seat-saved").getAttribute("value") != 0) {
        let seatBefore = "seat-" + document.getElementById("seat-saved").value
        document.getElementById(seatBefore).style.backgroundColor = 'white';
        document.getElementById(seatBefore).style.borderColor = '#12abde';
        document.getElementById(seatBefore).style.color = '#12abde';
    }
    if (e.getAttribute('value') == 1) {
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
            document.getElementById('seat-selected').replaceChild(renderSeatSummary(title, date, time, seat), document.getElementById('seat-summary'));
        }
    }
}

function payment() {
    let url = new URL(window.location.href);
    let id = new URLSearchParams(url.search).get("movie");
    let date = new URLSearchParams(url.search).get("date");
    let histDate = convertDateToFormat(date)
    let time = new URLSearchParams(url.search).get("time");
    let seat = document.getElementById('seat-saved').value;
    console.log(seat);

    let request = new XMLHttpRequest();
    let params = "movie=" + id + "&date=" + histDate + "&time=" + time + "&seat=" + seat;
    request.open("GET", "php/insertTransaction.php" + "?" + params, true);
    request.send()

    request.onload = function() {
        if (request.response.substr(-3) == '200'){
            document.getElementById('modal').style.display = 'block';
        } else {
            alert("Payment failed");
        }
    }
    
}

function close() {
    document.getElementById('modal').style.display='none';
}

function goToTransaction() {
    window.location.replace('transactions.html');
}

let modal = document.getElementById('modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}