<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_POST) {
    // Get input data
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);

    if (empty($username)) {
        $username = "";
    }

    if (empty($email)) {
        $email = "";
    }

    if (empty($phone)) {
        $phone = "";
    }

    // Preparing checkQuery
    $checkQuery = "SELECT * FROM users WHERE (username = :username) OR (email = :email) OR (phone = :phone) LIMIT 1";
    $stmt1 = $db->prepare($checkQuery);

    // Bind checkQuery parameters
    $params1 = array(
        ":username" => $username,
        ":email" => $email,
        ":phone" => $phone
    );

    // Execute checkQuery
    $stmt1->execute($params1);

    // Existing data validation
    $result = $stmt1->fetch(PDO::FETCH_ASSOC);

    if ($result) {        
        if ($result['username'] === $username) {
            echo 401;
        } 

        if ($result['email'] === $email) {
            echo 402;
        }

        if ($result['phone'] === $phone) {
            echo 403;
        } 

        
    }
}

?>