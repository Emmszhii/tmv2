-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 07:11 AM
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
-- Table structure for table `tmv2_settings_rates`
--

CREATE TABLE `tmv2_settings_rates` (
  `settings_rates_aid` int(11) NOT NULL,
  `settings_rates_description` text NOT NULL,
  `settings_rates_is_active` tinyint(1) NOT NULL,
  `settings_rates_created_at` datetime NOT NULL,
  `settings_rates_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_rates`
--

INSERT INTO `tmv2_settings_rates` (`settings_rates_aid`, `settings_rates_description`, `settings_rates_is_active`, `settings_rates_created_at`, `settings_rates_updated_at`) VALUES
(1, 'sample1', 0, '2023-09-21 13:09:37', '2023-09-21 13:09:42'),
(2, 'test', 1, '2023-09-21 13:10:43', '2023-09-21 13:10:43'),
(3, 'testing', 1, '2023-09-21 13:10:47', '2023-09-21 13:10:47'),
(4, 'samples', 1, '2023-09-21 13:10:53', '2023-09-21 13:10:53'),
(5, 'testingggs', 1, '2023-09-21 13:11:00', '2023-09-21 13:11:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_rates`
--
ALTER TABLE `tmv2_settings_rates`
  ADD PRIMARY KEY (`settings_rates_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_settings_rates`
--
ALTER TABLE `tmv2_settings_rates`
  MODIFY `settings_rates_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
