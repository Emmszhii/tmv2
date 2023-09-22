-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 06:26 AM
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
  `settings_activity_aid` varchar(11) NOT NULL,
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
('1', 'SAMPLE', 'SAMPLE', 1, '2023-09-22 10:46:27', '2023-09-22 10:46:27'),
('11', 'SAMPLE1', 'SAMPLE', 1, '2023-09-22 10:46:53', '2023-09-22 10:46:53'),
('2', 'SAMPLE', 'sample', 1, '2023-09-22 12:20:37', '2023-09-22 12:20:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_activity`
--
ALTER TABLE `tmv2_settings_activity`
  ADD PRIMARY KEY (`settings_activity_aid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
