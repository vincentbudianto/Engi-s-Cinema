<?php

$cookieName = "user";

if (empty($_COOKIE[$cookieName])) {
	header("Location: http://localhost/engiscinema/engi-s-cinema/login.html");
}
else {
	header("Location: http://localhost/engiscinema/engi-s-cinema/homepage.html");
}