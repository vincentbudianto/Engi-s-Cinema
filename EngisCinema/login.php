<?php 

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$errors = array();

if (isset($_POST['login']))
{
    // Get input data
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

    // Input data validation
    if (empty($username))
    {
  	    array_push($errors, "Username/email is required");
    }
    
    if (empty($password))
    {
        array_push($errors, "Password is required");
    }
    
    if (count($errors) == 0)
    {
        // Preparing searchQuery
        $searchQuery = "SELECT * FROM users WHERE (username = :username) OR (email = :email)";
        $stmt = $db->prepare($searchQuery);
        
        // Bind searchQuery parameters
        $params = array
        (
            ":username" => $username,
            ":email" => $username
        );

        // Execute searchQuery
        $stmt->execute($params);

        // Data validation
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user)
        {
            // Password verification
            if (password_verify($password, $user["password"]))
            {
                session_start();
                $_SESSION["user"] = $user;
                header("location: timeline.php");
            }
            else
            {
                array_push($errors, "Wrong password");
            }
        }
        else
        {
            array_push($errors, "Username/email is not registered");
        }
    }
}
?>