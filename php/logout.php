<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$cookieName = "user";
$user = $_COOKIE[$cookieName];

// Preparing deleteQuery
$deleteQuery = "DELETE FROM cookies WHERE (token = :token)";
$stmt = $db->prepare($deleteQuery);

// Bind deleteQuery parameters
$params = array(
    ":token" => $user
);

// Execute deleteQuery
$logoutStatus = $stmt->execute($params);

// Go to loginpage
if ($logoutStatus) {
    //Delete cookie
    setcookie($cookieName, "", time() - 86400, "/");
    echo 200;
} else {
    echo 201;
}
?>