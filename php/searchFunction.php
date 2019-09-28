<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$result = array();

if ($_GET) {
    // Get searching data
	$searching = $_GET['search'];

	//Get movie data
	// Preparing getMovieByTitle
	$getMovieByTitle = "SELECT * FROM movies WHERE (title LIKE :searching) OR (title LIKE CONCAT('% ', :searching)) OR (title LIKE CONCAT(:searching, ' %')) OR (title LIKE CONCAT('% ', :searching, ' %')) OR (title LIKE CONCAT('% ', :searching, '.%')) OR (title LIKE CONCAT('% ', :searching, ',%')) OR (title LIKE CONCAT('% ', :searching, '!%')) OR (title LIKE CONCAT('% ', :searching, '?%')) OR (title LIKE CONCAT(:searching, '.%')) OR (title LIKE CONCAT(:searching, ',%')) OR (title LIKE CONCAT(:searching, '!%')) OR (title LIKE CONCAT(:searching, '?%'))";

	$stmt1 = $db->prepare($getMovieByTitle);

	// Bind getMovieByTitle parameters
	$params1 = array(
		":searching" => $searching
	);

	// Execute getMovieByTitle
	$foundTitle = $stmt1->execute($params1);

	// Preparing getMovieByGenre
	$getMovieByGenre = "SELECT * FROM movies WHERE (genre LIKE :searching) OR (genre LIKE CONCAT('% ', :searching)) OR (genre LIKE CONCAT(:searching, ' %')) OR (genre LIKE CONCAT('% ', :searching, ' %')) OR (genre LIKE CONCAT('% ', :searching, '.%')) OR (genre LIKE CONCAT('% ', :searching, ',%')) OR (genre LIKE CONCAT('% ', :searching, '!%')) OR (genre LIKE CONCAT('% ', :searching, '?%')) OR (genre LIKE CONCAT(:searching, '.%')) OR (genre LIKE CONCAT(:searching, ',%')) OR (genre LIKE CONCAT(:searching, '!%')) OR (genre LIKE CONCAT(:searching, '?%'))";

	$stmt2 = $db->prepare($getMovieByGenre);

	// Bind getMovieByGenre parameters
	$params2 = array(
		":searching" => $searching
	);

	// Execute getMovieByGenre
	$foundGenre = $stmt2->execute($params2);

	// Preparing getMovieByDescription
	$getMovieByDescription = "SELECT * FROM movies WHERE (description LIKE :searching) OR (description LIKE CONCAT('% ', :searching)) OR (description LIKE CONCAT(:searching, ' %')) OR (description LIKE CONCAT('% ', :searching, ' %')) OR (description LIKE CONCAT('% ', :searching, '.%')) OR (description LIKE CONCAT('% ', :searching, ',%')) OR (description LIKE CONCAT('% ', :searching, '!%')) OR (description LIKE CONCAT('% ', :searching, '?%')) OR (description LIKE CONCAT(:searching, '.%')) OR (description LIKE CONCAT(:searching, ',%')) OR (description LIKE CONCAT(:searching, '!%')) OR (description LIKE CONCAT(:searching, '?%'))";

	$stmt3 = $db->prepare($getMovieByDescription);

	// Bind getMovieByDescription parameters
	$params3 = array(
		":searching" => $searching
	);

	// Execute getMovieByDescription
	$foundDescription = $stmt3->execute($params3);

	// Preparing getMovieByOthers
	$getMovieByOthers = "SELECT * FROM movies WHERE (title LIKE CONCAT('%', :searching, '%')) OR (genre LIKE CONCAT('%', :searching, '%')) OR (description LIKE CONCAT('%', :searching, '%'))";

	$stmt4 = $db->prepare($getMovieByOthers);

	// Bind getMovieByOthers parameters
	$params4 = array(
		":searching" => $searching
	);

	// Execute getMovieByOthers
	$foundOthers = $stmt4->execute($params4);

	if($foundTitle) {
		$movieTitle = $stmt1->fetchall();
	}

	if ($foundGenre) {
		$movieGenre = $stmt2->fetchall();
	}

	if ($foundDescription) {
		$movieDescription = $stmt3->fetchall();
	}

	if ($foundOthers) {
		$movieOthers = $stmt4->fetchall();
	}

	$temp = array_unique(array_merge($movieTitle, $movieGenre, $movieDescription, $movieOthers), SORT_REGULAR);

	foreach ($temp as $data) {
		array_push($result, $data);
	}

	echo json_encode($result, JSON_INVALID_UTF8_IGNORE);
}