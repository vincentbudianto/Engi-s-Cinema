<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$directory = "../assets/profilePicture/";
$tmp_dir = "assets/profilePicture/";
$errors = array();
$fileType = array('image/jpg', 'image/jpeg', 'image/png', 'image/svg');

if ($_POST) {
    // Get input data
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $nameProfilePicture = $_FILES["profilePicture"]["name"];
    $typeProfilePicture = $_FILES["profilePicture"]["type"];
    $tempProfilePicture = $_FILES["profilePicture"]["tmp_name"];
    $sizeProfilePicture = $_FILES["profilePicture"]["size"];
    $token = password_hash($username, PASSWORD_DEFAULT);

    //Input data validation
    if (!preg_match("/\w/", $username)) {
        echo 301;
        array_push($errors, "Username is invalid");
    }

    if ((strlen((string)$phone) < 9) or (strlen((string) $phone) > 12)) {
        echo 302;
        array_push($errors, "Phone number is invalid");
    }

    if (empty($nameProfilePicture)) {
        echo 303;
        array_push($errors, "Profile picture can't be empty");
    }
    else if ($sizeProfilePicture > 2000000) {
        echo 304;
        array_push($errors, "File can't be more than 2 MB");
    }
    else if (!in_array($typeProfilePicture, $fileType)) {
        echo 305;
        array_push($errors, "File type is invalid");
    }

    if (move_uploaded_file($tempProfilePicture, $directory . $nameProfilePicture)) {
        $profilePicture = $tmp_dir . $nameProfilePicture;
    }
    else {
        echo 501;
        array_push($errors, "Failed to upload profile picture");
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
            array_push($errors, "Username already exist");
        }

        if ($result['email'] === $email) {
            echo 402;
            array_push($errors, "Email already exist");
        }

        if ($result['phone'] === $phone) {
            echo 403;
            array_push($errors, "Phone number already exist");
        }
    }

    if (count($errors) == 0) {
        // Preparing insertQuery
        $insertQuery = "INSERT INTO users (username, email, phone, password, profilePicture, token) VALUES (:username, :email, :phone, :password, :profilePicture, :token)";
        $stmt2 = $db->prepare($insertQuery);

        // Bind insertQuery parameters
        $params2 = array(
            ":username" => $username,
            ":email" => $email,
            ":phone" => $phone,
            ":password" => $password,
            ":profilePicture" => $profilePicture,
            ":token" => $token
        );

        // Execute insertQuery
        $registered = $stmt2->execute($params2);

        // Go to login page
        if ($registered) {
            echo 200;
        }
        else {
            echo 201;
        }
    }
}
