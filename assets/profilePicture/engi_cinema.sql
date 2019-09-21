-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Sep 2019 pada 13.26
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `engi_cinema`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cookies`
--

CREATE TABLE `cookies` (
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profilePicture` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'default.svg',
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `phone`, `password`, `profilePicture`, `token`) VALUES
(1, 'test', 'test@gmail.com', '081123456789', '$2y$10$BGoBkEuiMk48rRUrNg/mO.blpLRjPx5KYVR.US5QZVDCnG43a7Xdm', '../assets/profilePicture/test.png', '$2y$10$PaD6D4My3XZQ6MP2ge0w/..2HHka1om6WPXCvCxyHlENhF1U61rBK'),
(2, 'vincentbudianto', '13517137@std.stei.itb.ac.id', '081321554136', '$2y$10$ogyxir5H0awV3kznBgPzUOt/HtbwiJzFXwn576gjOzyAsRyAr3sBu', '../assets/profilePicture/Rimuru Tempest.jpeg', '$2y$10$qaBLh/6tzzw12Xa4hxjmkOgkrulHNMD0nScJZVaQSf1hxhLSxusuu');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cookies`
--
ALTER TABLE `cookies`
  ADD PRIMARY KEY (`token`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
