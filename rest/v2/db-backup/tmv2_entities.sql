-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 07:11 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tmv2`
--

-- --------------------------------------------------------

--
-- Table structure for table `tmv2_entities`
--

CREATE TABLE `tmv2_entities` (
  `entities_aid` int(11) NOT NULL,
  `entities_is_active` tinyint(1) NOT NULL,
  `entities_id` varchar(50) NOT NULL,
  `entities_description` varchar(200) NOT NULL,
  `entities_created_at` datetime NOT NULL,
  `entities_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_entities`
--

INSERT INTO `tmv2_entities` (`entities_aid`, `entities_is_active`, `entities_id`, `entities_description`, `entities_created_at`, `entities_updated_at`) VALUES
(1, 0, 'ACCOUNTING', 'ACCOUNTINGACCOUNTINGACCOUNTINGss', '2023-09-21 09:12:05', '0000-00-00 00:00:00'),
(2, 1, 'ssssssss', 'sssssssss', '2023-09-21 09:13:43', '2023-09-21 09:13:43'),
(3, 1, 'TEst', 'TEst', '2023-09-21 09:13:50', '2023-09-21 09:13:50'),
(4, 1, 'TEstTEst', 'TEstTEst', '2023-09-21 09:13:53', '2023-09-21 09:13:53'),
(5, 1, 'TEstTEstTEstTEst', 'TEstTEstTEst', '2023-09-21 09:13:57', '2023-09-21 09:13:57'),
(6, 1, 'TEstTEstTEst', 'sadsadsad', '2023-09-21 09:14:07', '2023-09-21 09:14:07'),
(7, 1, 'sadsadsadsadsadsad', 'sadsadsadsadsadsadsadsadsadsadsadsad', '2023-09-21 09:14:11', '2023-09-21 09:14:11'),
(8, 1, 'sadsadsadsadsadsadsadsadsad', 'sadsadsadsadsadsadsadsadsad', '2023-09-21 09:14:15', '2023-09-21 09:14:15'),
(9, 1, 'sadsadsadsadsadsadsadsadsad', 'sadsadsadsadsadsadsadsadsadsadsadsad', '2023-09-21 09:14:19', '2023-09-21 09:14:19'),
(10, 1, 'sadsadsadsadsadsadsadsadsad', 'sadsadsadsadsadsadsadsadsad', '2023-09-21 09:14:23', '2023-09-21 09:14:23'),
(11, 1, 'sadsadsadsadsadsadsadsadsad', 'sadsadsadsadsadsadsadsadsadsadsadsad', '2023-09-21 09:14:26', '2023-09-21 09:14:26'),
(12, 1, 'sadsadsad', 'sadsadsadsadsadsadsadsadsad', '2023-09-21 09:14:29', '2023-09-21 09:14:29'),
(13, 1, 'dsad', 'sadsad', '2023-09-21 09:14:33', '2023-09-21 09:14:33'),
(14, 1, 'sadsa', 'dsadsad', '2023-09-21 09:14:36', '2023-09-21 09:14:36'),
(15, 1, 'asdsad', 'sadsadsad', '2023-09-21 09:14:40', '2023-09-21 09:14:40'),
(16, 1, 'asdsadsa', 'dsadsad', '2023-09-21 09:14:42', '2023-09-21 09:14:42'),
(17, 0, 'asdasd', 'asdasdas', '2023-09-21 09:14:58', '0000-00-00 00:00:00'),
(18, 1, 'asdasdasd', 'asdasdsad', '2023-09-21 09:15:04', '2023-09-21 09:15:04'),
(19, 0, 'asdasdas', 'dasdasdasd', '2023-09-21 09:15:08', '0000-00-00 00:00:00'),
(20, 0, 'asdasd', 'asdasdas', '2023-09-21 09:15:13', '0000-00-00 00:00:00'),
(21, 1, 'asdasdas', 'asdasdasdas', '2023-09-21 09:15:19', '2023-09-21 09:15:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_entities`
--
ALTER TABLE `tmv2_entities`
  ADD PRIMARY KEY (`entities_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_entities`
--
ALTER TABLE `tmv2_entities`
  MODIFY `entities_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
