<?php
// Connecting to database engi_cinema
require_once("config.php");

// Get Seat Info
$query = "SELECT seatNo, filled FROM seat"; // WHERE (scheduleID=:scheduleID)";
$stmt1 = $db->prepare($query);

// Bind GetSeatInfo parameters
/*$params1 = array(
    ":scheduleID" => $scheduleID
);*/
//Execute Get Seat Info Query
$stmt1->execute();
$result = $stmt1->fetchAll();
//$resultCount = $stmt1->rowCount();

echo json_encode($result, JSON_INVALID_UTF8_IGNORE);

if ($_POST)  {
    
}
?>