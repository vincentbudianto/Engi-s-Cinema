-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2019 at 06:29 PM
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

--
-- Dumping data for table `cookies`
--

INSERT INTO `cookies` (`token`) VALUES
('$2y$10$qaBLh/6tzzw12Xa4hxjmkOgkrulHNMD0nScJZVaQSf1hxhLSxusuu');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movieID` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rating` float NOT NULL,
  `genre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `duration` int(4) NOT NULL,
  `date` date NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `poster` mediumtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movieID`, `title`, `rating`, `genre`, `duration`, `date`, `description`, `poster`) VALUES
(291867, 'Zeroville', 6.1, 'Comedy, Drama', 96, '2019-09-20', 'A young actor arrives in Hollywood in 1969 during a transitional time in the Industry.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/79ZbOA6mwzuDNICi6l0rVLouNDG.jpg'),
(393624, 'Official Secrets', 7, 'Drama, Romance, Thriller, War', 112, '2019-01-28', 'The true story of British intelligence whistleblower Katharine Gun, who prior to the 2003 Iraq invasion leaked a top-secret NSA memo exposing a joint US-UK illegal spying operation against members of the UN Security Council. The memo proposed blackmailing member states into voting for war.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6jyM5iRM2YYf1k14nG5hJFkZ65n.jpg'),
(405177, 'Where\'d You Go, Bernadette', 6.5, 'Comedy, Drama, Mystery', 103, '2019-08-16', 'When architect-turned-recluse Bernadette Fox goes missing prior to a family trip to Antarctica, her 15-year-old daughter Bee goes on a quest with Bernadette\'s husband to find her.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/BziuuZULnGmTRLthEty1QdKSEo.jpg'),
(413453, 'Malibu Road', 10, 'Mystery, Romance, Thriller', 95, '2019-09-17', 'Dr. Raymond Forrester, professor of psychology at UCLA, takes student and Hollywood starlet Dorothy Crowder to a Malibu hotel of questionable reputation. The two ingest LSD, sent in a mysterious package to Forrester, and become some of the first Americans to go on a psychedelic experience. The experience takes a turn for the deadly during New Year\'s Eve 1960 and now the duo must rediscover reality or be trapped in an endless cycle of sex, drugs and murder in \'paradise.\'', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qt79wgtl715xLlY34ztcuUrR4Fg.jpg'),
(417466, 'Monos', 8, 'Drama, Thriller', 102, '2019-01-26', 'On a faraway mountaintop, eight kids with guns watch over a hostage and a conscripted milk cow.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wHI0ZoAt2QHU2aKfSnunrCFW4Jb.jpg'),
(419704, 'Ad Astra', 6.2, 'Drama, Science Fiction', 124, '2019-09-20', 'An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rp3PS9hl0sTZ6eOrXQF95Ben2N8.jpg'),
(423204, 'Angel Has Fallen', 5.5, 'Action', 121, '2019-08-23', 'Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg'),
(441282, 'Night Hunter', 6.1, 'Crime, Mystery, Thriller', 98, '2018-09-28', 'A police task force traps an online predator, only to discover that the depth of his crimes goes far beyond anything they had anticipated.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/tAMIXRTHRI7znijZhD6hrR6618J.jpg'),
(447034, 'Vita & Virginia', 7.2, 'Drama, Romance', 110, '2019-08-23', 'Socialite Vita Sackville-West and literary icon Virginia Woolf run in different circles in 1920s London. Despite the odds, the magnetic Vita and the beguiling Virginia forge an unconventional affair, set against the backdrop of their own strikingly contemporary marriages; which inspired one of Woolf\'s most iconic novels, \'Orlando\'.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kNsMRldqZgsinyFjwNn1UzC0iln.jpg'),
(454292, 'Saaho', 6.5, 'Action, Thriller', 171, '2019-08-30', 'A battle for power ensues as warring gangters thrive to gain possession of a \"black box\" that can make them richer than they already are, and an undercover cop intervenes with the help of his sharp intellect and an instinct to kill.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rWXIpR2uPkwb1Hrhjj2FA62FGdu.jpg'),
(454640, 'The Angry Birds Movie 2', 6.2, 'Action, Adventure, Animation, Comedy, Family', 96, '2019-08-14', 'Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg'),
(456529, 'Jacob\'s Ladder', 6.1, 'Horror, Mystery, Thriller', 89, '2019-08-23', 'After losing his brother in combat, Jacob Singer returns home from Afghanistan -- only to be pulled into a mind-twisting state of paranoia. Singer soon realizes that his sibling is alive but life is not what it seems.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wIlmYRxrIVBo90ITVBCCbTqUZE3.jpg'),
(460064, 'Edie', 6.2, 'Drama', 102, '2019-09-06', 'To try and overcome a lifetime of bitterness and resentment, an older lady decides to climb a mountain in Scotland.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5L9bDg7f3AycCagYwgwaKa52yKe.jpg'),
(472674, 'The Goldfinch', 6.6, 'Drama', 149, '2019-09-13', 'A boy in New York is taken in by a wealthy family after his mother is killed in a bombing at the Metropolitan Museum of Art. In a rush of panic, he steals \'The Goldfinch\', a painting that eventually draws him into a world of crime.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/8NwONmcJmPr0w9A176JorJ3tbJx.jpg'),
(474350, 'It Chapter Two', 7.1, 'Comedy, Horror', 169, '2019-09-06', '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zfE0R94v1E8cuKAerbskfD3VfUt.jpg'),
(480105, '47 Meters Down: Uncaged', 5.5, 'Adventure, Horror, Thriller', 89, '2019-08-16', 'A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean\'s deadliest shark species.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wmiC67ium8Is9Fg7PkTAK7cnHj0.jpg'),
(482034, 'Riot Girls', 1, 'Action, Horror, Science Fiction', 81, '2019-09-13', 'In an alternate 1995, a mysterious disease has wiped out all of the adults. In this new age, two gangs are pitted against each other in a brutal war for territory, resources and survival.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4b4gPmANpH26aeWSQYlg1YpVbXu.jpg'),
(483096, 'Gags The Clown', 3, 'Horror, Thriller', 89, '2019-09-03', 'It\'s been eight days since the clown first showed up in Green Bay, WI. Now, over the course of one night, four different groups of people cross paths with the clown everyone calls \"Gags\" and his true intentions are finally revealed.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zxEAk1JQbXeiRAF8hS0296TcYnc.jpg'),
(486233, 'Adam', 2.1, 'Comedy', 95, '2019-01-25', 'Adam, an awkward teen, spends a summer with his older sister, who is part of New York City\'s lesbian and trans activist scene. He meets the girl of his dreams but can\'t figure out how to tell her he\'s not the trans man she thinks he is.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/n4HBr4ps1OwO6OuNWG4Vt22kUfF.jpg'),
(492449, 'Killerman', 7.8, 'Action, Thriller', 112, '2019-08-30', 'Small-time money launderer Moe Diamond suffers from amnesia after a freak accident during a deal gone wrong.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wWpbW893AGmSBbFdACjY0xllw7D.jpg'),
(501977, 'Depraved', 4.6, 'Horror', 114, '2019-03-20', 'A field surgeon who suffers from PTSD after combat in the Middle East, and creates a living human out of body parts in his Gowanus, Brooklyn lab.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/pMNqjuJBjOaOFY3kVqHjN2FQahg.jpg'),
(506775, 'Nekrotronic', 6.4, 'Comedy, Horror, Science Fiction', 99, '2019-08-23', 'A man discovers that he is part of a secret sect of magical beings who hunt down and destroy demons in the internet.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zT0G9rNziv26mx5Q2QS1ecwzaQ6.jpg'),
(508138, 'Burn', 6.6, 'Thriller', 89, '2019-08-23', 'Lonely, unstable gas station attendant Melinda is tired of being overshadowed by her more confident, outgoing co-worker Sheila. When the gas station is held up at gunpoint by Billy, a desperate man in need of quick cash, Melinda finds an opportunity to make a connection with the robber, regardless of who gets hurt.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ifSMo5x7SDXpettRt8TWY9EOquM.jpg'),
(509853, 'The Fanatic', 6, 'Thriller', 88, '2019-08-30', 'A rabid film fan stalks his favorite action hero and destroys the star\'s life.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/8Ru5mAKyaRbFpANkhVlPzcOkqFB.jpg'),
(510388, 'Villains', 6.6, 'Comedy, Crime, Thriller', 89, '2019-03-09', 'When their car breaks down, a couple on the run headed southbound for a fresh start in the Sunshine State break into a nearby house looking for a new set of wheels. What they find instead is a dark secret, and a sweet-as-pie pair of homeowners who will do anything to keep it from getting out.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/Arefq9eI1z94Jtrbbuqzg9p5mf8.jpg'),
(515741, 'Angel of Mine', 5.9, 'Drama, Thriller', 98, '2019-08-30', 'A woman grieving over the death of her daughter loses grip of reality when she begins to think her girl may still be alive.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/q8IxjDRqJ7jFtt5Fn0jcXjiRVoF.jpg'),
(517116, 'Haunt', 6.3, 'Horror, Thriller', 92, '2019-09-13', 'On Halloween, a group of friends encounter an \"extreme\" haunted house that promises to feed on their darkest fears. The night turns deadly as they come to the horrifying realization that some nightmares are real.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/haQSrjFlq30I60UVN1VsB6uRwKM.jpg'),
(520016, 'Driven', 6.4, 'Comedy, Crime, Drama, Thriller', 113, '2019-08-16', 'FBI informant Jim Hoffman lures troubled automobile magnate John DeLorean to an undercover sting for cocaine trafficking.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5szS3NXiycrTL67AunS7TLG0EE0.jpg'),
(521777, 'Good Boys', 6.5, 'Comedy', 89, '2019-03-11', 'A group of young boys on the cusp of becoming teenagers embark on an epic quest to fix their broken drone before their parents get home.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jIthqo2tQmW8TFN1fYpF8FmVL0o.jpg'),
(522938, 'Rambo: Last Blood', 6.3, 'Action, Thriller', 100, '2019-09-20', 'When his housekeeper’s granddaughter is kidnapped, Rambo crosses the U.S.-Mexican border to bring her home but finds himself up against the full might of one of Mexico’s most ruthless cartels.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg'),
(523077, 'Running with the Devil', 5.3, 'Crime, Drama, Thriller', 100, '2019-09-20', 'A leader of a drug cartel sends his two toughest henchmen to investigate why a shipment was botched.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qJ2H94PpXxZgiGGUNkyLSKZzm8u.jpg'),
(527659, 'One Last Night', 7, 'Comedy, Romance', 84, '2019-08-16', 'A man and a woman start to fall for each other after they get locked inside a movie theater on their first date.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6tIMfVIhOymZmY66rOcznmREl6S.jpg'),
(527776, 'Overcomer', 7.8, 'Drama', 119, '2019-08-23', 'After reluctantly agreeing to coach cross-country, high school basketball Coach John Harrison helps the least likely runner attempt the impossible in the biggest race of the year.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rVR3uN1yPRqYBBtNFSrEKCpRhaK.jpg'),
(529862, 'Brittany Runs a Marathon', 8.1, 'Comedy, Drama', 103, '2019-01-28', 'A young woman decides to make positive changes in her life by training for the New York City Marathon.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/aSWePCEtLpNdD7ykW6OuZqvVhyn.jpg'),
(530076, 'Corporate Animals', 6, 'Comedy, Horror', 86, '2019-01-29', 'Disaster strikes when the egotistical CEO of an edible cutlery company leads her long-suffering staff on a corporate team-building trip in New Mexico. Trapped underground, this mismatched and disgruntled group must pull together to survive.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nFiJwUXiKLcsblGKvUPHyGjLEn7.jpg'),
(534259, 'Blinded by the Light', 7.5, 'Comedy, Drama, Music', 114, '2019-01-27', 'In 1987, during the austere days of Thatcher’s Britain, a teenager learns to live life, understand his family, and find his own voice through the music of Bruce Springsteen.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vdWzIFpiUcV2uNGUrmgbtyNK2I0.jpg'),
(535544, 'Downton Abbey', 7.3, 'Drama', 122, '2019-09-20', 'The beloved Crawleys and their intrepid staff prepare for the most important moment of their lives. A royal visit from the King and Queen of England will unleash scandal, romance and intrigue that will leave the future of Downton hanging in the balance.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/pWt1iRuhNpeVDNP2QiUT2C5OiBt.jpg'),
(537734, 'The Weekend', 5, 'Comedy', 86, '2019-09-13', 'An acerbic comedian becomes romantically entangled with her ex, his new girlfriend, and another guest during a weekend getaway.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6IJ9UcJjUjMW6UOvQ99MllDZhoN.jpg'),
(537739, 'Can You Keep a Secret?', 6.2, 'Comedy, Romance', 94, '2019-09-13', 'Emma Corrigan, a girl with a few secrets on a turbulent plane ride, thinks she’s about to die, Emma spills them all to the handsome stranger sitting next to her. At least, she thought he was a stranger. But then, her company’s young and elusive CEO, arrives at the office. It’s him. And he knows every single humiliating detail about Emma.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uNWk5HZfVBHpARcV1z9cwUAbtpF.jpg'),
(539016, 'Aquarela', 8, 'Documentary', 90, '2019-08-16', 'From massive waves to melting ice, filmmaker Victor Kossakovsky travels around the world to capture stunning images of the beauty and raw power of water.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/Aq4z0BOwqLWljb2SRQXu1fpGTco.jpg'),
(539651, 'Don\'t Let Go', 7.1, 'Horror, Science Fiction, Thriller', 107, '2019-01-27', 'After a man\'s family dies in what appears to be a murder, he gets a phone call from one of the dead, his niece. He\'s not sure if she’s a ghost or if he\'s going mad - but as it turns out, he\'s not. Instead, her calls help him rewrite history.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ahETZlOXCPIUVhp1HBW4X7KefiS.jpg'),
(539892, 'Freaks', 5.9, 'Drama, Science Fiction, Thriller', 104, '2019-09-13', 'A bold girl discovers a bizarre, threatening, and mysterious new world beyond her front door after she escapes her father\'s protective and paranoid control.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kc2cvuqESIiRX5QoZOoMTBq18kQ.jpg'),
(540901, 'Hustlers', 6.3, 'Comedy, Crime, Drama, History', 107, '2019-09-13', 'A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg'),
(543768, 'Gwen', 5.4, 'Drama, History, Horror, Mystery', 84, '2019-08-16', 'A mysterious — and suspicious — run of ill fortune plagues a teenage girl and her mother and sister on their hillside farm in this folk story set in the dark hills of Wales during the industrial revolution.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nUiyoWRMRaDOmnYAElr7XWIyvsi.jpg'),
(543917, 'Bloodline', 5.9, 'Horror, Thriller', 95, '2018-09-22', 'Evan values family above all else, and anyone who gets between him, his wife, and newborn son learns that the hard way. But when it comes to violent tendencies, it seems the apple doesn’t fall far from the tree.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/u9UfbDVilnhT3fa82aTFs3O0TsA.jpg'),
(550156, 'American Dreamer', 6.2, 'Crime, Thriller', 92, '2018-09-27', 'A down on his luck driver making extra cash chauffeuring a low level drug dealer around town, finds himself in a serious financial bind and decides to kidnap the dealer\'s child.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/q2Kp6ZrCWQV1qr7SHbUUsEpuW5I.jpg'),
(553600, 'Promare', 8.4, 'Action, Animation, Science Fiction', 111, '2019-09-17', 'Galo and the Burning Rescue Fire Department face off against BURNISH, a group of mutants who are able to control and wield flames, and the fire disaster they have unleashed on Earth.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/h2Jt4xQqJRnh49LktRS2EGDX3rY.jpg'),
(554590, 'Tod@s Caen', 7.3, 'Comedy', 120, '2019-08-30', 'A pair of seducers try to prove who has the best techniques while trying not to fall in love with each other.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dYf4tU4qFdsiZCZiVCJrkdMquC1.jpg'),
(554993, 'Britt-Marie Was Here', 4.3, 'Comedy, Drama', 98, '2019-09-20', 'Britt-Marie, a woman in her sixties, decides to leave her husband and start anew. Having been housewife for most of her life and and living in small backwater town of Borg, there isn\'t many jobs available and soon she finds herself fending a youth football team.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/e9OtL3FAvFQvY692lrpg0JIvrVV.jpg'),
(565326, 'Before You Know It', 7, 'Comedy', 98, '2019-01-27', 'In 1993 New York City, dysfunctional co-dependent sisters discover that the mother they thought had died when they were young is alive and starring on a popular daytime soap opera.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jAM1OSLm1AoVoXyLdbnkBlRSCdi.jpg'),
(565340, 'Ms. Purple', 10, 'Drama', 88, '2019-01-25', 'Kasie, stuck in LA’s Koreatown, works as a karaoke hostess getting paid for her companionship by drunken men. When her dad’s hospice nurse quits she reconnects with her estranged brother, Carey, forcing them to enter a period of intense self-reflection as their single father who raised them nears death.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4Bdpl2i0nx1sgYCahwh4xeG21t0.jpg'),
(565341, 'The Sound of Silence', 7, 'Drama', 87, '2019-01-26', 'A successful \"house tuner\" in New York City, who calibrates the sound in people\'s homes in order to adjust their moods, meets a client with a problem he can\'t solve.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dXkv8lkX9gdJyUxxrulJ2PWzidI.jpg'),
(565531, 'Where\'s My Roy Cohn?', 5.2, 'Documentary', 97, '2019-01-25', 'Roy Cohn personified the dark arts of American politics, turning empty vessels into dangerous demagogues - from Joseph McCarthy to his final project, Donald J. Trump. This thriller-like exposé connects the dots, revealing how a deeply troubled master manipulator shaped our current American nightmare.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dgOMHjH9Gd2zVYyv2vYVU1mVHRD.jpg'),
(565716, 'American Factory', 6.8, 'Documentary', 110, '2019-01-25', 'In post-industrial Ohio, a Chinese billionaire opens a new factory in the husk of an abandoned General Motors plant, hiring two thousand blue-collar Americans. Early days of hope and optimism give way to setbacks as high-tech China clashes with working-class America.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7jH3dQOJ3CHMrp9tWsI3rRCDiaD.jpg'),
(566061, 'Cold Case Hammarskjöld', 7.6, 'Documentary, History', 129, '2019-01-26', 'Ndola, Northern Rhodesia (currently Zambia), September 18th, 1961. Swedish Dag Hammarskjöld, UN Secretary-General, mysteriously dies in a plane crash. Decades later, Danish journalist and filmmaker Mads Brügger and Swedish researcher Göran Björkdahl investigate the case looking for a definitive closure.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/tz4bx85aiCquxCNly1eqSz1jpcm.jpg'),
(566216, 'Midnight Traveler', 6.8, 'Documentary', 87, '2019-01-27', 'In 2015, the Taliban put a price on the head of Hassan, a filmmaker who was forced to flee Afghanistan with his wife and two young daughters. Using their camera phones, the fugitives show firsthand the many dangers refugees face when seeking asylum in a safe place.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/828R9U5g24dtIWvCH6w641EOhZg.jpg'),
(566233, 'Raise Hell: The Life & Times of Molly Ivins', 8, 'Documentary', 91, '2019-01-28', 'Molly Ivins was six feet of flame-haired Texas trouble. She was a prescient political journalist, best-selling author, and Bill of Rights warrior. She took no prisoners, leaving both sides of the aisle laughing and craving more of her razor-sharp wit. It\'s time to raise hell like Molly!', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rWrest5rxn9SYMLHNgM2RP1oanX.jpg'),
(567409, 'Hex', 4.6, 'Horror, Thriller', 85, '2019-09-06', 'A couple\'s holiday romance is thrown into chaos as they are afflicted by a malicious force.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9VPOksFz39eCvHnRmdrESxByLbN.jpg'),
(567609, 'Ready or Not', 7, 'Comedy, Horror, Mystery, Thriller', 95, '2019-08-21', 'A bride\'s wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg'),
(568693, 'The Amazing Johnathan Documentary', 5.3, 'Comedy, Documentary', 94, '2019-01-25', 'What begins as a documentary following the final tour of a dying magician—\"The Amazing Johnathan\"—becomes an unexpected and increasingly bizarre journey as the filmmaker struggles to separate truth from illusion.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gduS1BqSJ2Jg6XiG9HvR1IAtu60.jpg'),
(571627, 'The Divine Fury', 4, 'Action, Horror', 129, '2019-08-16', 'After waking up with mysterious wounds on his hands, a champion fighter finds himself in an otherworldly battle against evil forces that wreak havoc in the human world.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9Z2qT9iZYLzzsCSYu7A4SEQsKX0.jpg'),
(574370, 'I Can Quit Whenever I Want', 5.7, 'Comedy', 98, '2019-09-04', 'Pedro, Arturo and Eligio are three college professors who lost their job because of economic crisis. Accidentally they find a solution for all of their problems;  a multi-vitamin that allows them to party all night long without any side effects. The three professors will be launched into the world of nightclubs and the shady business, in order to market the merchandise. Of course, it seems that they are not as prepared for it as they thought.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/k5LP414yqZSaRAZf9uVh1ufO2mN.jpg'),
(579507, 'Jay Myself', 6.5, 'Documentary', 79, '2018-11-11', 'Photographer Stephen Wilkes creates an intimate portrait of his mentor, Jay Maisel, as he leaves the 30,000 square foot building in the Bowery that he\'s inhabited and filled with his eccentric collection of beautiful random objects for the last 40 years - known as \'The Bank.\'', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f4QN6yy0UnZY9agbj8xQSHtWx9r.jpg'),
(586961, 'End of the Century', 10, 'Drama, Romance', 84, '2019-03-30', 'Two men meet in Barcelona and after spending a day together they realize that they have already met twenty years ago.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/u2kFrBtOzihZdp7KTixLQ79jc2a.jpg'),
(589739, 'Hair Love', 6.8, 'Animation, Family', 5, '2019-08-14', 'When dad has to unexpectedly step in for mom to do his daughter Zuri’s hair before a big event, what seems like a simple task is anything but as these locks have a mind of their own!', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/w2wYB2Lt2cpADybLxffHibGxqh4.jpg'),
(590050, 'Candy Corn', 4, 'Horror', 85, '2019-09-13', 'On Halloween eve in 1980, local outcast, Julien Cummings, is carelessly murdered. A vagabond witch doctor, Dr. Death, takes matters into his own hands and brings Julien back from the dead to creatively seek brutal revenge on his killers.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTBTFKHAPKPBynoHgMnEBsIWw22.jpg'),
(590209, 'Chasing Einstein', 9, 'Documentary', 82, '2019-04-06', 'Follow leading scientists around the world and to the edge of the universe on their quest to solve one of the greatest mysteries of the universe, the mysterious invisible “dark matter.”', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/mfDNl2cAASYGi5vV4FFXHjPh5Vo.jpg'),
(590978, 'Liam Gallagher: As It Was', 7.7, 'Documentary, Music', 85, '2019-09-13', 'The emotional story of how one of the greatest rock frontmen went from the dizzying heights of his champagne supernova years in Oasis to living on the edge ostracised lost in the musical wilderness of boredom, booze and bitter legal battles.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gnh3OQggVn8IivMbl4uYsoFRdy3.jpg'),
(596980, 'Linda Ronstadt: The Sound of My Voice', 8.2, 'Documentary', 95, '2019-04-26', 'With one of the most memorably stunning voices that has ever hit the airwaves, Linda Ronstadt burst onto the 1960s folk rock music scene in her early twenties.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qesNFICo3d9oj044hXK5qHjmovI.jpg'),
(602703, 'Rapid Response', 6.2, 'Documentary', 99, '2019-09-06', 'Dr. Stephen Olvey and his team develop revolutionary procedures to make motor sports safer for the drivers.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/zAquZV7cMZwObrkmi1f05QhBAOF.jpg'),
(603055, 'Bennett\'s War', 3.8, 'Drama', 95, '2019-08-30', 'After surviving an IED explosion in combat overseas, a young soldier with the Army Motorcycle Unit is medically discharged with a broken back and leg. Against all odds he trains to make an impossible comeback as a motocross racer in order to support his family.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/8RWBqk1NFlOr28gmzKc6etgznQ3.jpg'),
(608504, 'Fiddler: A Miracle of Miracles', 7.2, 'Documentary', 92, '2019-07-18', 'The origin story behind one of Broadway\'s most beloved musicals, Fiddler on The Roof, and its creative roots in early 1960s New York, when \"tradition\" was on the wane as gender roles, sexuality, race relations and religion were evolving.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kpSmPJJ53kFpblb8I0dhF658PNS.jpg'),
(613667, 'Send Me to the Clouds', 6.6, 'Comedy, Drama', 98, '2019-09-20', 'Diagnosed with ovarian cancer, iron-willed journalist Sheng Nan (“Surpass Men” in Chinese) is pressured to make a quick fortune and find mind-blowing sex before the costly surgery numbs her senses. Taking on a businessman’s biography writing job, she hikes into the misty mountains, where a chain of outbursts with her dysfunctional family, grumpy client, misogynistic co-worker and dreamlike romantic interest hilariously unfold. As deeply moving as it is luminously witty, writer-director Teng Cong', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dX81xXvhCuyDsA17GlVZS6fniQl.jpg'),
(616584, 'K-12', 8, 'Fantasy, Horror, Music', 92, '2019-09-03', 'Cry Baby, a strong and sensitive girl, is sent off to a disturbing sleepaway school that’s hidden underneath a grandiose façade. Luckily, she has a sweet and unapologetic best friend who sticks up for her when she gets bullied by the other students whose brains are under control by the Principal and his wicked staff. With the help of the magical friends they meet along the way, as well as an Angelic Spirit Guide, they are able to gain the strength they need to fight off the school’s belligerent ', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nVi0yBBPj5Z96JgGWVIg94kv7bR.jpg'),
(619798, '7 Days to Vegas', 6.7, 'Comedy', 92, '2019-01-11', 'Inspired by a true story about Hollywood big shots who will bet on anything.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7UTJRJazrgUozExesHONCecA9iZ.jpg'),
(620210, 'Fagara', 7.3, 'Drama, Family', 119, '2019-09-13', 'After her father died, a Hong Kong girl discovers she has two hitherto unknown sisters, one in Taiwan and one in China. To settle her father\'s debt, she must reunite with them to run the family\'s hot pot restaurant.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jIyAHuIjRjYZwAGymH9FvTXieSq.jpg'),
(623582, 'Already Gone', 10, 'Drama', 93, '2019-08-16', 'A lonely teenager runs away from home, bringing his abusive stepfather\'s girlfriend with him.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/yuDXE3Wkutr5Clh8C2afsn3IVzu.jpg'),
(624474, 'RUSH: Cinema Strangiato 2019', 0, 'Music', 120, '2019-08-21', 'The Holy Trinity of Rock returns to the big screen on Wednesday, August 21, when the first \"Annual Exercise in Fan Indulgence\" Cinema Strangiato brings Rush fans together in movie theatres worldwide.  Featuring R40+, this global fan event will give audiences a special look into some of the best performances from R40 LIVE.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/8yXjMncwRFSB46yyqETZxRSpvaJ.jpg'),
(629442, '3 Days with Dad', 8, 'Comedy', 94, '2019-09-13', 'The last thing Eddie Mills wants to do is go home to deal with his dying Dad. But the Catholic guilt gnaws at him, and he returns home to his crazy family, an overbearing step-mother, and his bear of a father. Once there, Eddie is confronted with a revelation that forces him to deal with the past he has always avoided.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/8EGxLSCW8GJ1ryvLeNV2GMCJurO.jpg'),
(630106, '1/2 New Year', 7.3, 'Comedy, Drama', 75, '2019-09-10', 'At their annual 1/2 New Year Party, relationships are tested among a group of friends.', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/x2ZFDcfgjD5a6RTlGCkrpErg98k.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `showing`
--

CREATE TABLE `showing` (
  `movieID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `showing`
--

INSERT INTO `showing` (`movieID`) VALUES
(291867),
(413453),
(419704),
(460064),
(472674),
(474350),
(482034),
(483096),
(517116),
(522938),
(523077),
(535544),
(537734),
(537739),
(539892),
(540901),
(553600),
(554993),
(567409),
(574370),
(590050),
(590978),
(602703),
(613667),
(616584),
(620210),
(629442),
(630106);

-- --------------------------------------------------------

--
-- Table structure for table `transactions_history`
--

CREATE TABLE `transactions_history` (
  `transactionID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `userRate` int(11) DEFAULT NULL,
  `userReview` longtext COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profilePicture` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `email`, `phone`, `password`, `profilePicture`, `token`) VALUES
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
  ADD PRIMARY KEY (`movieID`);

--
-- Indexes for table `showing`
--
ALTER TABLE `showing`
  ADD KEY `movieID` (`movieID`);

--
-- Indexes for table `transactions_history`
--
ALTER TABLE `transactions_history`
  ADD PRIMARY KEY (`transactionID`),
  ADD KEY `transactions_history_ibfk_1` (`userID`),
  ADD KEY `transactions_history_ibfk_2` (`movieID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `token` (`token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transactions_history`
--
ALTER TABLE `transactions_history`
  MODIFY `transactionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cookies`
--
ALTER TABLE `cookies`
  ADD CONSTRAINT `cookies_ibfk_1` FOREIGN KEY (`token`) REFERENCES `users` (`token`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `showing`
--
ALTER TABLE `showing`
  ADD CONSTRAINT `showing_ibfk_1` FOREIGN KEY (`movieID`) REFERENCES `movies` (`movieID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions_history`
--
ALTER TABLE `transactions_history`
  ADD CONSTRAINT `transactions_history_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_history_ibfk_2` FOREIGN KEY (`movieID`) REFERENCES `movies` (`movieID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
