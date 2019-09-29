<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_GET) {
    //Get movie ID
    $movieID = $_GET["id"];

    $query = "SELECT scheduleDate, scheduleTime, seat FROM schedule WHERE (movieID = :movieID)";
    $stmt = $db->prepare($query);

    $params = array(
        ":movieID" => $movieID
    );

    $stmt->execute($params);

    $data = $stmt->fetchall();
    
    echo json_encode($data);
}
?>