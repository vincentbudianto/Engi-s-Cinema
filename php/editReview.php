<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_POST) {
    // Get input data
	$transactionID = filter_input(INPUT_POST, 'transaction-id', FILTER_SANITIZE_STRING);

	// Preparing getUserReview
    $getUserReview = "SELECT * FROM transactions_history WHERE
    (transactionID = :transactionID)";

    $stmt = $db->prepare($getUserReview);

	// Bind getUserReview parameters
    $params = array(
        ":transactionID" => $transactionID
    );

	// Execute getUserReview
    $stmt->execute($params);

    $review = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($review, JSON_INVALID_UTF8_IGNORE);
}

?>