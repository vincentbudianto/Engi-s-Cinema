<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$directory = "../assets/profilePicture/";
$cookieName = "user";

if ($_POST) {
	// Get input data
	$title = filter_input(INPUT_POST, 'movie-title', FILTER_SANITIZE_STRING);
    $rating = filter_input(INPUT_POST, 'rating-star', FILTER_SANITIZE_STRING);
	$review = filter_input(INPUT_POST, 'review-input', FILTER_SANITIZE_STRING);
	$token = $_COOKIE[$cookieName];

	// Get userID
	// Preparing getUserQuery
	$getUserQuery = "SELECT userID FROM users WHERE (token = :token)";
	$stmt1 = $db->prepare($getUserQuery);

	// Bind getUserQuery parameters
	$params1 = array(
		":token" => $token
	);

	// Execute getUserQuery
	$stmt1->execute($params1);
	$userID = $stmt1->fetch(PDO::FETCH_ASSOC)["userID"];

	echo nl2br($userID . "\n\n");

	// Get movieID
	// Preparing getMovieQuery
	$getMovieQuery = "SELECT movieID FROM movies WHERE (title = :title)";
	$stmt2 = $db->prepare($getMovieQuery);

	// Bind getMovieQuery parameters
	$params2 = array(
		":title" => $title
	);

	// Execute getMovieQuery
	$stmt2->execute($params2);
	$movieID = $stmt2->fetch(PDO::FETCH_ASSOC)["movieID"];

	echo nl2br($movieID . "\n\n");

	// Preparing updateQuery
	$updateQuery = "UPDATE transactions_history SET userRate = :userRate, userReview = :userReview WHERE (userID = :userID) AND (movieID = :movieID)";
	$stmt3 = $db->prepare($updateQuery);

	// Bind updateQuery parameters
	$params3 = array(
		":userRate" => $rating,
		":userReview" => $review,
		":userID" => $userID,
		":movieID" => $movieID
	);

	var_dump($params3);

	// Execute updateQuery
	$updated = $stmt3->execute($params3);

	// Go to transactions page
	if ($updated) {
		echo 200;
	}
	else {
		echo 201;
	}
}
