<?php
//Delete cookie
setcookie("userCookie", "", time() - 86400);

header("location:login.html");

?>