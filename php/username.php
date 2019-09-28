<?php

// Connecting to database engi_cinema
require_once("config.php");

$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query = "SELECT username FROM users WHERE (token = :token)";
$stmt = $db->prepare($query);

$params = array(
    ":token" => $cookieValue
);

$stmt->execute($params);

$uname = $stmt->fetch(PDO::FETCH_ASSOC);
echo $uname["username"];
?>