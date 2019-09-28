<?php

// Connecting to database engi_cinema
require_once("config.php");

$getShowingId = "SELECT movieID from showing";
$stmt = $db->prepare($getShowingId);

$stmt->execute();

$showingList = $stmt->fetchall();

$movieList = array();

foreach ($showingList as $id) {
    $getMovieDetail = "SELECT movieID, title, rating, poster FROM movies WHERE (movieID = :id)";
    $stmt = $db->prepare($getMovieDetail) ;

    $params = array(
        ":id" => $id["movieID"]
    );

    $stmt->execute($params);

    $movie = $stmt->fetch(PDO::FETCH_ASSOC);
    array_push($movieList, $movie);
}

echo json_encode($movieList, JSON_INVALID_UTF8_IGNORE);
?>