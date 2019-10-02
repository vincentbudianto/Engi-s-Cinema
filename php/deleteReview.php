<?php

// Connecting to database engi_cinema
require_once("config.php");

//Get User ID
$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query = "SELECT userID FROM users WHERE (token = :token)";
$stmt1 = $db->prepare($query);

$params1 = array(
    ":token" => $cookieValue
);

$stmt1->execute($params1);

$uID = $stmt1->fetch(PDO::FETCH_ASSOC);

$userID = $uID["userID"];

//Get Movie ID
$title = $_GET["title"];

$query = "SELECT movieID FROM movies WHERE (title = :title)";
$stmt2 = $db->prepare($query);

$params2 = array(
    ":title" => $title
);

$stmt2->execute($params2);

$mID = $stmt2->fetch(PDO::FETCH_ASSOC);

$movieID = $mID["movieID"];

$query = "UPDATE transactions_history SET userRate = NULL, userReview = NULL WHERE
(userID = :userID) AND (movieID = :movieID)";

$stmt3 = $db->prepare($query);

$params3 = array(
    ":userID" => $userID,
    ":movieID" => $movieID
);

$status = $stmt3->execute($params3);

?>