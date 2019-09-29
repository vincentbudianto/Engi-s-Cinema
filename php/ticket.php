<?php
$connection = mysqli_connect("localhost","root","","engi_cinema") or die("couldn't connect localhost");
$query = mysqli_query($connection, "SELECT * FROM seat") or die("couldn't search!");
$countSeat = 1;
$output = '';
while($row = mysqli_fetch_array($query)) {
    $id = $row['id'];
    $filled = $row['filled'];
    if ($filled == 1) {
        $output .= '<label for=\"'.$id.'\" class="seat-number" id="filled"><input type="checkbox" name="seat-number" id=\"'.$id.'\" style="display:none;" disabled="disabled"/>'.$countSeat.'</label>';
    }
    else {
        $output .= '<label for=\"'.$id.'\" class="seat-number" id="empty"><input type="checkbox" name="seat-number" id=\"'.$id.'\" style="display:auto;" />'.$countSeat.'</label>';
    }
    $countSeat = $countSeat+1; 
}
?>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/pageTemplate.css">
        <link rel="stylesheet" type="text/css" href="../css/ticket.css">
        <script src="../js/navFunction.js" defer></script>
        <script src="../js/ticket.js" defer></script>
        <title>Buy Ticket</title>
    </head>

    <body>
        <div class="navbar">
            <div class="navbar-wrapper">
                <label class="navbar-button" id="navbar-title" onclick="location.href='../homepage.html'"><span id="homepage-title">Engi</span>ma</label>
                <div class ="search-bar">
                    <input id="search-input" type="search" placeholder="Search movie">
                    <img class="navbar-button" id="search-icon" src="../assets/search_icon.png" alt="Search icon" onclick="search()">
                </div>
                    <label class="navbar-button" id="transactions-button" onclick="location.href='../transactions.html'">Transactions</label>
                <label class="navbar-button" id="logout-button" onclick="logout()">Logout</label>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="grid-container">
                <div class="grid-item">
                    <div class="ticket-info-container">
                        <div class="back-icon">
                            <img src="../assets/back_icon.png">
                        </div>
                        <div class="ticket-info">
                            <label id="title" value="Avengers">Gundala</label>
                            <label id="schedule">August 29, 2019 - 04.00 PM</label>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="seat-container">
                        <div class="seat">
                            <div class="seat-number-container">
                                <?php print("$output"); ?>
                                <div class="screen">Screen</div>
                            </div>
                        </div>
                        
                        <div class="summary">
                            <label id="summary-text">Booking Summary</label>
                            <span id="change">
                                <span id="seat-selected">
                                    <span id="seat-summary">
                                            <span id="summary-title">Gundala</span>
                                            <span id="summary-schedule">August 29, 2019 - 04.00 PM</span>
                                            <div class="summary-seat">
                                                <span id="seat-text">Seat</span>
                                                <span id="number-text">#18</span>
                                                <span id="price-text">Rp 45.000</span>
                                            </div>
                                            <div class="summary-button">
                                                <button id="buy-button" onclick="payment();">Buy Ticket</button>
                                            </div>
                                    </span>
                                </span>  
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal" class="modal">
            <span onclick="close();"></span>
            <div class="modal-content-container">
                <div class="modal-content">
                    <p id="success">Payment Success!</p>
                    <p id="thanks">Thank you for purchasing! You can view your purchase now.</p>
                    <button id="modal-button" onclick="location.href='../transactions.html'">Go to transaction history</button>
                </div>
            </div>
        </div>
    </body>
</html>