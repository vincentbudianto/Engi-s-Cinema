<?php

// Connecting to database engi_cinema
require_once("config.php");

$userID = $_GET["userID"];
echo $userID;
$movieID = $_GET["movie"];
echo $movieID;
$date = $_GET["date"];
echo $date;
$time = $_GET["time"];
echo $time;

$query = "INSERT INTO transactions_history (userID, movieID, 
historyDate, historyTime) VALUES (:userID, 
:movieID, :historyDate, :historyTime)";

$stmt = $db->prepare($query);

$params = array(
    ":userID" => $userID,
    ":movieID" => $movieID,
    ":historyDate" => $date,
    ":historyTime" => $time
);

$status = $stmt->execute($params);

if ($status) {
    echo 200;
}
?>