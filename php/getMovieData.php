<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_POST) {
    // Get input data
	$movieID = filter_input(INPUT_POST, 'movie-id', FILTER_SANITIZE_STRING);

	//Get movie data
	// Preparing getMovieQuery
	$getMovieQuery = "SELECT * FROM movies WHERE (movieID = :movieID)";
	$stmt = $db->prepare($getMovieQuery);

	// Bind getMovieQuery parameters
	$params = array(
		":movieID" => $movieID
	);

	// Execute getMovieQuery
	$found = $stmt->execute($params);

	if($found) {
		$movieData = $stmt->fetch(PDO::FETCH_ASSOC);
		echo json_encode($movieData);
	} else {
		$movieData = array("movieID" => "", "title" => "Movie Not Found", "rating" => "", "genre" => "", "duration" => "", "date" => "", "description" => "", "poster" => "");
		echo json_encode($movieData);
	}
}