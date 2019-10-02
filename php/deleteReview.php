<?php

// Connecting to database engi_cinema
require_once("config.php");

//Get Transcation ID
$transcationID = $_GET["id"];

$query = "UPDATE transactions_history SET userRate = NULL, userReview = NULL WHERE (transactionID = :transcationID)";

$stmt = $db->prepare($query);

$params = array(
    ":transcationID" => $transcationID
);

$status = $stmt->execute($params);

?>