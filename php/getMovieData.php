<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$directory = "../assets/profilePicture/";
$errors = array();

if ($_POST) {
    // Get input data
	$movieID = filter_input(INPUT_POST, 'movie-id', FILTER_SANITIZE_STRING);
	// echo nl2br("movieID  : ". $movieID . "\n\n");

	//Get movie data
	// Preparing getMovieQuery
	$getMovieQuery = "SELECT * FROM movies WHERE (movieID = :movieID)";
	$stmt = $db->prepare($getMovieQuery);

	// Bind getMovieQuery parameters
	$params = array(
		":movieID" => $movieID
	);

	// Execute getMovieQuery
	$stmt->execute($params);
	$movieData = $stmt->fetch(PDO::FETCH_ASSOC);

	echo json_encode($movieData);
}