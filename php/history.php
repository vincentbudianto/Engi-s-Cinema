<?php

// Connecting to database engi_cinema
require_once("config.php");

$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query = "SELECT userID FROM users WHERE (token = :token)";
$stmt1 = $db->prepare($query);

$params1 = array(
    ":token" => $cookieValue
);

$stmt1->execute($params1);

$uID = $stmt1->fetch(PDO::FETCH_ASSOC);

$query = "SELECT transactionID, movieID, historyDate, historyTime, userReview,
poster, title FROM transactions_history JOIN movies USING
(movieID) WHERE (userID = :id)";

$stmt2 = $db->prepare($query);

$params2 = array(
    ":id" => $uID["userID"]
);

$stmt2->execute($params2);

$history_list = $stmt2->fetchall();

echo json_encode($history_list, JSON_INVALID_UTF8_IGNORE);

?>