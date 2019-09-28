<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_GET) {
    //Get movie id
    $id = $_GET["id"];

    // echo $id;

    $query = "SELECT * FROM movies WHERE (movieID = :id)";
    $stmt = $db->prepare($query);

    $params = array(
        ":id" => $id
    );

    $stmt->execute($params);

    $movie = $stmt->fetch(PDO::FETCH_ASSOC);

    // var_dump($movie);

    $target = json_encode($movie, JSON_INVALID_UTF8_IGNORE);

    echo $target;
}

?>