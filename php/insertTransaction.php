<?php

// Connecting to database engi_cinema
require_once("config.php");

$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query1 = "SELECT userID FROM users WHERE (token = :token)";
$stmt1 = $db->prepare($query1);

$params1 = array(
    ":token" => $cookieValue
);

$stmt1->execute($params1);

$userID = $stmt1->fetch(PDO::FETCH_ASSOC)["userID"];

$movieID = $_GET["movie"];
$date = $_GET["date"];
$time = $_GET["time"];
$seat = $_GET["seat"];

$query2 = "SELECT scheduleID FROM schedule WHERE (movieID = :movieID)
AND (scheduleDate = :scheduleDate) AND (scheduleTime = :scheduleTime)";
$stmt2 = $db->prepare($query2);

$params2 = array(
    ":movieID" => $movieID,
    ":scheduleDate" => $date,
    ":scheduleTime" =>$time
);

$stmt2->execute($params2);

$scheduleID = $stmt2->fetch(PDO::FETCH_ASSOC)["scheduleID"];

$query3 = "INSERT INTO seat (scheduleID, seatNo, filled)
VALUES (:scheduleID, :seatNo, 0)";
$stmt3 = $db->prepare($query3);

$params3 = array(
    ":scheduleID" => $scheduleID,
    ":seatNo" => $seat
);

$stmt3->execute($params3);

$query4 = "UPDATE schedule SET seat=seat - 1 WHERE (scheduleID = :scheduleID)";
$stmt4 = $db->prepare($query4);

$params4 = array(
    ":scheduleID" => $scheduleID
);

$stmt4->execute($params4);

$query5 = "INSERT INTO transactions_history (userID, movieID,
historyDate, historyTime) VALUES (:userID,
:movieID, :historyDate, :historyTime)";

$stmt5 = $db->prepare($query5);

$params5 = array(
    ":userID" => $userID,
    ":movieID" => $movieID,
    ":historyDate" => $date,
    ":historyTime" => $time
);

$status = $stmt5->execute($params5);

if ($status) {
    echo 200;
} else {
    echo 400;
}
?>