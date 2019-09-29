<?php

// Connecting to database engi_cinema
require_once("config.php");

$movieID = $_GET["movie"];

$query = "SELECT title FROM movies WHERE (movieID = :movieID)";
$stmt = $db->prepare($query);

$params = array(
    ":movieID" => $movieID
);

$stmt->execute($params);

$title = $stmt->fetch(PDO::FETCH_ASSOC);
echo $title["title"];
?>