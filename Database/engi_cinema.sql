-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2019 at 08:18 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

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
-- Table structure for table `cookies`
--

CREATE TABLE `cookies` (
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rating` float NOT NULL,
  `genre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `duration` int(4) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `poster` mediumtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `rating`, `genre`, `duration`, `date`, `description`, `poster`) VALUES
(1, 'Toy Story 4', 77, 'Adventure, Animation, Comedy, Family', 100, '2019-06-11', 'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg'),
(2, 'Dark Phoenix', 61, 'Action, Adventure, Science Fiction', 114, '2019-06-07', 'The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she\'s hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey\'s new abilities to rule the galaxy.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cCTJPelKGLhALq3r51A9uMonxKj.jpg'),
(3, 'Godzilla: King of the Monsters', 61, 'Action, Science Fiction', 132, '2019-05-31', 'Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species - thought to be mere myths - rise again, they all vie for supremacy, leaving humanity\'s very existence hanging in the balance.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fQ40gmFM4p03tXwMxQQKh2cCBW4.jpg'),
(4, 'Fast & Furious Presents: Hobbs & Shaw', 65, 'Action', 136, '2019-07-13', 'A spinoff of The Fate of the Furious, focusing on Johnson\'s US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham\'s Deckard Shaw.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/keym7MPn1icW1wWfzMnW3HeuzWU.jpg'),
(5, 'Ad Astra', 62, 'Adventure, Drama, Mystery, Science Fiction, Thriller', 124, '2019-09-20', 'An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6e1P7OVSQT4O2h6vnJiOj90s7gT.jpg'),
(6, 'Aladdin', 71, 'Adventure, Comedy, Family, Fantasy, Romance', 128, '2019-05-24', 'A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg'),
(7, 'The Lion King', 72, 'Action, Adventure, Animation, Drama, Family', 118, '2019-07-19', 'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg'),
(8, 'Angel Has Fallen', 56, 'Action', 121, '2019-08-23', 'Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg'),
(9, 'The Old Man & the Gun', 64, 'Comedy, Crime, Drama', 93, '2018-08-31', 'The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'),
(10, 'Spider-Man: Far from Home', 77, 'Action, Adventure, Science Fiction', 129, '2019-06-26', 'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lcq8dVxeeOqHvvgcte707K0KVx5.jpg'),
(11, 'John Wick: Chapter 3 – Parabellum', 71, 'Action, Crime, Thriller', 131, '2019-05-09', 'Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg'),
(12, 'It Chapter Two', 72, 'Comedy, Horror', 169, '2019-09-06', '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zfE0R94v1E8cuKAerbskfD3VfUt.jpg'),
(13, 'Anna', 65, 'Action, Thriller', 119, '2019-06-21', 'Beneath Anna Poliatova\'s striking beauty lies a secret that will unleash her indelible strength and skill to become one of the world\'s most feared government assassins.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hDpur5nBU27xACkQvm45utQgYJ7.jpg'),
(14, 'Annabelle Comes Home', 61, 'Horror, Mystery, Thriller', 106, '2019-06-26', 'Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her “safely” behind sacred glass and enlisting a priest’s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target—the Warrens\' ten-year-old daughter, Judy, and her friends.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qWsHMrbg9DsBY3bCMk9jyYCRVRs.jpg'),
(15, 'Rambo: Last Blood', 67, 'Action, Thriller', 89, '2019-09-20', 'When his housekeeper’s granddaughter is kidnapped, Rambo crosses the U.S.-Mexican border to bring her home but finds himself up against the full might of one of Mexico’s most ruthless cartels.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/maHr4ceIxkb22uJCFIvPgx0rZsq.jpg'),
(16, 'Lisbela and the Prisoner', 77, 'Comedy, Romance', 106, '2003-08-22', 'Lisbela is a young woman who loves going to the movies. Leléu is a con man, going from town to town selling all sort of things and performing as master of ceremonies for some cheesy numbers, such as the woman who gets transformed into a gorilla. He gets involved with Linaura, a sexy and beautiful woman who happens to be the wife of the most frightening hitman of the place. The hitman finds out his wife\'s affair and goes after Leléu, who has to leave in a hurry. In another town, he meets and fall', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9nlaRxQeYaMrVVANMppagFohCRP.jpg'),
(17, 'Child\'s Play', 59, 'Horror', 90, '2019-06-21', 'Karen, a single mother, gifts her son Andy a Buddi doll for his birthday, unaware of its more sinister nature. A contemporary re-imagining of the 1988 horror classic.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rpS7ROczWulqfaXG2klYapULXKm.jpg'),
(18, 'Hustlers', 64, 'Comedy, Crime, Drama', 107, '2019-09-13', 'A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg'),
(19, 'L-DK: Two Loves, Under One Roof', 71, 'Romance', 107, '2019-03-21', 'Aoi Nishimori and Shusei Kugayama are in love and they begin to live together secretly. Suddenly, Shusei\'s cousin Reon Kugayama comes to them. Their secret is discovered by Reon. Now, Aoi, Shusei and Reon begin to live together.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/8L66hJyXptS9XBt5b4O7WkZuwYj.jpg'),
(20, 'Cars', 67, 'Adventure, Animation, Comedy, Family', 117, '2006-03-14', 'Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town\'s offbeat characters.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
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
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `phone`, `password`, `profilePicture`, `token`) VALUES
(1, 'test', 'test@gmail.com', '081123456789', '$2y$10$BGoBkEuiMk48rRUrNg/mO.blpLRjPx5KYVR.US5QZVDCnG43a7Xdm', '../assets/profilePicture/test.png', '$2y$10$PaD6D4My3XZQ6MP2ge0w/..2HHka1om6WPXCvCxyHlENhF1U61rBK'),
(2, 'vincentbudianto', '13517137@std.stei.itb.ac.id', '081321554136', '$2y$10$ogyxir5H0awV3kznBgPzUOt/HtbwiJzFXwn576gjOzyAsRyAr3sBu', '../assets/profilePicture/Rimuru Tempest.jpeg', '$2y$10$qaBLh/6tzzw12Xa4hxjmkOgkrulHNMD0nScJZVaQSf1hxhLSxusuu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cookies`
--
ALTER TABLE `cookies`
  ADD PRIMARY KEY (`token`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
