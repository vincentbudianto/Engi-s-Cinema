<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$directory = "../assets/profilePicture/";
$cookieName = "user";

if ($_POST) {
	// Get input data
    $rating = filter_input(INPUT_POST, 'rating-star', FILTER_SANITIZE_STRING);
	$review = filter_input(INPUT_POST, 'review-input', FILTER_SANITIZE_STRING);
	$transactionID = filter_input(INPUT_POST, 'transaction-id', FILTER_SANITIZE_STRING);
	$token = $_COOKIE[$cookieName];

	// Preparing updateQuery
	$updateQuery = "UPDATE transactions_history SET userRate = :userRate, userReview = :userReview WHERE (transactionID = :transactionID)";
	$stmt = $db->prepare($updateQuery);

	// Bind updateQuery parameters
	$params = array(
		":userRate" => $rating,
		":userReview" => $review,
		":transactionID" => $transactionID
	);

	// Execute updateQuery
	$updated = $stmt->execute($params);

	// Go to transactions page
	if ($updated) {
		echo 200;
	}
	else {
		echo 201;
	}
}
