-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 08:16 AM
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
-- Table structure for table `tmv2_lost_to`
--

CREATE TABLE `tmv2_lost_to` (
  `lost_to_aid` int(11) NOT NULL,
  `lost_to_is_active` tinyint(1) NOT NULL,
  `lost_to_description` varchar(200) NOT NULL,
  `lost_to_created_at` datetime NOT NULL,
  `lost_to_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_lost_to`
--

INSERT INTO `tmv2_lost_to` (`lost_to_aid`, `lost_to_is_active`, `lost_to_description`, `lost_to_created_at`, `lost_to_updated_at`) VALUES
(1, 1, 'Bob the builder', '2023-09-21 14:14:33', '2023-09-21 14:14:33'),
(2, 1, 'sa kanya kasi siya ang pinili', '2023-09-21 14:14:43', '2023-09-21 14:14:43'),
(3, 1, 'Floyd Mayweather', '2023-09-21 14:15:08', '2023-09-21 14:15:08'),
(4, 1, 'James Reid', '2023-09-21 14:15:29', '2023-09-21 14:15:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_lost_to`
--
ALTER TABLE `tmv2_lost_to`
  ADD PRIMARY KEY (`lost_to_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_lost_to`
--
ALTER TABLE `tmv2_lost_to`
  MODIFY `lost_to_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
