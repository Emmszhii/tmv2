-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 07:12 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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
-- Table structure for table `tmv2_settings_activity`
--

CREATE TABLE `tmv2_settings_activity` (
  `settings_activity_aid` int(11) NOT NULL,
  `settings_activity_description` text NOT NULL,
  `settings_activity_invoice_description` text NOT NULL,
  `settings_activity_is_active` tinyint(1) NOT NULL,
  `settings_activity_created_at` datetime NOT NULL,
  `settings_activity_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_activity`
--

INSERT INTO `tmv2_settings_activity` (`settings_activity_aid`, `settings_activity_description`, `settings_activity_invoice_description`, `settings_activity_is_active`, `settings_activity_created_at`, `settings_activity_updated_at`) VALUES
(2, 'Testing', 'Testing', 0, '2023-09-21 12:33:31', '2023-09-21 12:33:49'),
(3, 'Test', 'Test', 1, '2023-09-21 12:33:37', '2023-09-21 12:33:37'),
(4, 'DAS', 'DAS', 1, '2023-09-21 12:33:45', '2023-09-21 12:33:45'),
(5, 'sample', 'sample', 1, '2023-09-21 12:33:59', '2023-09-21 12:33:59'),
(6, '1', '1', 1, '2023-09-21 12:34:48', '2023-09-21 12:34:48'),
(7, '2', '2', 1, '2023-09-21 12:34:52', '2023-09-21 12:34:52'),
(8, '3', '3', 1, '2023-09-21 12:34:54', '2023-09-21 12:34:54'),
(9, '4', '4', 1, '2023-09-21 12:34:57', '2023-09-21 12:34:57'),
(10, '5', '5', 1, '2023-09-21 12:34:59', '2023-09-21 12:34:59'),
(11, '6', '6', 1, '2023-09-21 12:35:02', '2023-09-21 12:35:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_activity`
--
ALTER TABLE `tmv2_settings_activity`
  ADD PRIMARY KEY (`settings_activity_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_settings_activity`
--
ALTER TABLE `tmv2_settings_activity`
  MODIFY `settings_activity_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
