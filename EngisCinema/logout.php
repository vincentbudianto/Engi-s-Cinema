<?php
//Delete cookie
setcookie("user", "", time() - 86400);

header("location:login.html");

?>