<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
	case '/':
		require __DIR__ . 'login.html';
		break;

	case '':
		require __DIR__ . 'login.html';
		break;

	default:
		require __DIR__ . 'pageNotFound.html';
		break;
}
