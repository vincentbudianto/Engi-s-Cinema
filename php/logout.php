<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$cookieName = "user";
$user = json_decode($_COOKIE[$cookieName], true);

// Preparing deleteQuery
$deleteQuery = "DELETE FROM cookies WHERE ((username = :username) AND (email = :email))";
$stmt = $db->prepare($deleteQuery);

// Bind deleteQuery parameters
$params = array(
    ":username" => $user["username"],
    ":email" => $user["email"]
);

// Execute deleteQuery
$logoutStatus = $stmt->execute($params);

// Go to homepage
if ($logoutStatus)
{
    //Delete cookie
    setcookie($cookieName, "", time() - 86400);
    
    header("location:login.html");
}
?>