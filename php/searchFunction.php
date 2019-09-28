<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_GET) {
    // Get searching data
	$searching = $_GET['search'];

	//Get movie data
	// Preparing getMovieByTitle
	$getMovieByTitle = "SELECT * FROM movies WHERE (title LIKE CONCAT('% ', :searching)) OR (title LIKE CONCAT(:searching, ' %')) OR (title LIKE CONCAT('% ', :searching, ' %')) OR (title LIKE CONCAT('% ', :searching, '.')) OR (title LIKE CONCAT('% ', :searching, '!')) OR (title LIKE CONCAT('% ', :searching, '?'))";
	$stmt1 = $db->prepare($getMovieByTitle);

	// Bind getMovieByTitle parameters
	$params1 = array(
		":searching" => $searching
	);

	$foundTitle = $stmt1->execute($params1);

	// Preparing getMovieByGenre
	$getMovieByGenre = "SELECT * FROM movies WHERE (genre LIKE CONCAT('% ', :searching)) OR (genre LIKE CONCAT(:searching, ' %')) OR (genre LIKE CONCAT('% ', :searching, ' %')) OR (genre LIKE CONCAT('% ', :searching, '.')) OR (genre LIKE CONCAT('% ', :searching, ',')) OR (genre LIKE CONCAT('% ', :searching, '!')) OR (genre LIKE CONCAT('% ', :searching, '?'))";
	$stmt2 = $db->prepare($getMovieByGenre);

	// Bind getMovieByGenre parameters
	$params2 = array(
		":searching" => $searching
	);

	$foundGenre = $stmt2->execute($params2);

	// Preparing getMovieByDescription
	$getMovieByDescription = "SELECT * FROM movies WHERE (description LIKE CONCAT('% ', :searching)) OR (description LIKE CONCAT(:searching, ' %')) OR (description LIKE CONCAT('% ', :searching, ' %')) OR (description LIKE CONCAT('% ', :searching, '.')) OR (description LIKE CONCAT('% ', :searching, '!')) OR (description LIKE CONCAT('% ', :searching, '?'))";

	$stmt3 = $db->prepare($getMovieByDescription);

	// Bind getMovieByDescription parameters
	$params3 = array(
		":searching" => $searching
	);

	// Execute getMovieBy
	$foundDescription = $stmt3->execute($params3);

	echo $foundTitle;
	if($foundTitle) {
		$movieTitle = $stmt1->fetchAll(PDO::FETCH_ASSOC);
		var_dump($movieTitle);
	}

	echo $foundGenre;
	if ($foundGenre) {
		$movieGenre = $stmt2->fetchAll(PDO::FETCH_ASSOC);
		var_dump($movieGenre);
	}

	echo $foundDescription;
	if ($foundDescription) {
		$movieDescription = $stmt2->fetchAll(PDO::FETCH_ASSOC);
		var_dump($movieDescription);
	}
	// echo json_encode($movieData);
}