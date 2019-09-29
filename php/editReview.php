<?php

// Connecting to database engi_cinema
require_once("config.php");
$cookieName = "user";

if ($_POST) {
    // Get input data
	$title = filter_input(INPUT_POST, 'movie-id', FILTER_SANITIZE_STRING);
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

	// Get movieID
	// Preparing getMovieQuery
	$getMovieQuery = "SELECT movieID FROM movies WHERE (title = :title)";
	$stmt2 = $db->prepare($getMovieQuery);

	// Bind getMovieQuery parameters
	$params2 = array(
		":title" => $title
	);

	// Execute getUserQuery
	$stmt2->execute($params2);
	$movieID = $stmt2->fetch(PDO::FETCH_ASSOC)["movieID"];

	// Preparing getUserReview
    $getUserReview = "SELECT * FROM transactions_history WHERE
    (userID = :userID) AND (movieID = :movieID)";

    $stmt3 = $db->prepare($getUserReview);

	// Bind getUserReview parameters
    $params3 = array(
        ":userID" => $userID,
        ":movieID" => $movieID
    );

	// Execute getUserReview
    $stmt3->execute($params3);

    $review = $stmt3->fetch(PDO::FETCH_ASSOC);

    echo json_encode($review, JSON_INVALID_UTF8_IGNORE);
}

?>