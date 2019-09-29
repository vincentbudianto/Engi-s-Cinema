<?php

$cookieName = "user";

if (empty($_COOKIE[$cookieName])) {
	header("Location: http://localhost/engi_cinema/login.html");
}
else {
	header("Location: http://localhost/engi_cinema/homepage.html");
}