<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_GET) {
    //Get movie ID
    $movieID = $_GET["id"];

    $query = "SELECT username, userRate, userReview, profilePicture FROM transactions_history JOIN users USING (userID) WHERE (movieID = :movieID)";
    $stmt = $db->prepare($query);

    $params = array(
        ":movieID" => $movieID
    );

    $stmt->execute($params);

    $data = $stmt->fetchall();
    
    echo json_encode($data);
}
?>