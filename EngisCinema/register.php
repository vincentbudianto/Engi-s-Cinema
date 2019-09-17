<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$errors = array();

if (isset($_POST['register']))
{
    // Get input data
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phoneNumber = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
    $password1 = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $password2 = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $profilePicture = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);

    // Input data validation
    if (empty($username))
    {
        array_push($errors, "Username is required");
    }
    
    if (empty($email))
    {
        array_push($errors, "Email is required");
    }
    
    if (empty($password1))
    {
        array_push($errors, "Password is required");
    }
    
    if ($password1 != $password2)
    {
        array_push($errors, "Passwords do not match");
    }

    // Preparing checkQuery
    $checkQuery = "SELECT * FROM users WHERE (username = :username) OR (email = :email) OR (phoneNumber = :phoneNumber) LIMIT 1";
    $stmt1 = $db->prepare($checkQuery);

    // Bind checkQuery parameters
    $params1 = array(
        ":username" => $username,
        ":email" => $email,
        ":phoneNumber" => $phoneNumber
    );

    // Execute checkQuery
    $stmt1->execute($params1);
    
    // Existing data validation
    $result = $stmt1->fetch(PDO::FETCH_ASSOC);

    if ($result)
    {
        if ($result['username'] === $username)
        {
            array_push($errors, "Username already exists");
        }

        if ($result['email'] === $email)
        {
            array_push($errors, "email already exists");
        }

        if ($result['phoneNumber'] === $phoneNumber)
        {
            array_push($errors, "email already exists");
        }
    }

    // Preparing query
    if (count($errors) == 0)
    {
        // Preparing insertQuery
        $insertQuery = "INSERT INTO users (username, email, phoneNumber, password, profilePicture) VALUES (:username, :email, :phoneNumber, :password, :profilePicture)";
        $stmt2 = $db->prepare($insertQuery);
        
        // Bind insertQuery parameters
        $params2 = array(
            ":username" => $username,
            ":email" => $email,
            ":phoneNumber" => $phoneNumber,
            ":password" => $password1,
            ":profilePicture" => $profilePicture
        );

        // Execute insertQuery
        $registered = $stmt2->execute($params2);

        // Go to login page
        if ($registered)
        {
            header("location: login.php");
        }
    }
}

?>