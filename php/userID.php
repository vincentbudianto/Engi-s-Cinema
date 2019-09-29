<?php

// Connecting to database engi_cinema
require_once("config.php");

$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query = "SELECT userID FROM users WHERE (token = :token)";
$stmt = $db->prepare($query);

$params = array(
    ":token" => $cookieValue
);

$stmt->execute($params);

$uID = $stmt->fetch(PDO::FETCH_ASSOC);
echo $uID["userID"];
?>