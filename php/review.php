<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$directory = "../assets/profilePicture/";
$errors = array();
$cookieName = "user";

if ($_POST) {
    // Get input data
    $rating = filter_input(INPUT_POST, 'rating-star', FILTER_SANITIZE_STRING);
	$review = filter_input(INPUT_POST, 'review-input', FILTER_SANITIZE_STRING);
	$movieID = filter_input(INPUT_POST, 'movie-id', FILTER_SANITIZE_STRING);
	$token = $_COOKIE[$cookieName];
	// echo nl2br("rating   : ". $rating . "\n\n");
	// echo nl2br("review   : ". $review . "\n\n");
	// echo nl2br("movieID  : ". $movieID . "\n\n");
	// echo nl2br("token    : ". $token . "\n\n");

	//Get userID
	// Preparing getUserQuery
	$getUserQuery = "SELECT userID FROM users WHERE (token = :token)";
	$stmt1 = $db->prepare($getUserQuery);

	// Bind getUserQuery parameters
	$params = array(
		":token" => $token
	);

	// Execute getUserQuery
	$stmt1->execute($params);
	$userID = $stmt1->fetch(PDO::FETCH_ASSOC)["userID"];
	// echo nl2br("userID   : ". $userID . "\n\n");

	// Preparing updateQuery
	$updateQuery = "UPDATE `transaction_history` SET `userRate` = :userRate, `userReview` = :userReview WHERE (`userID` = :userID) AND (`movieID` = :movieID)";
	$stmt2 = $db->prepare($updateQuery);

	// Bind updateQuery parameters
	$params2 = array(
		":userRate" => $rating,
		":userReview" => $review,
		":userID" => $userID,
		":movieID" => $movieID
	);

	// Execute updateQuery
	$updated = $stmt2->execute($params2);

	// Go to transactions page
	if ($updated) {
		echo 200;
	}
	else {
		echo 201;
	}
}
    