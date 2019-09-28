<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_GET) {
    //Get movie id
    $id = $_GET["id"];
    
    $query = "SELECT * FROM movies WHERE (movieID = :id)";
    $stmt = $db->prepare($query);

    $params = array(
        ":id" => $id
    );

    $stmt->execute($params);

    $movie = $stmt->fetch(PDO::FETCH_ASSOC);

    $target = json_encode($movie);

    echo $target;
}

?>