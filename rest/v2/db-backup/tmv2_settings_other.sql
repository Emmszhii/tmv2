-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2023 at 09:40 AM
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
-- Table structure for table `tmv2_settings_other`
--

CREATE TABLE `tmv2_settings_other` (
  `settings_other_aid` int(11) NOT NULL,
  `settings_other_name` varchar(100) NOT NULL,
  `settings_other_email` varchar(100) NOT NULL,
  `settings_other_role` varchar(100) NOT NULL,
  `settings_other_is_active` tinyint(1) NOT NULL,
  `settings_other_created_at` datetime NOT NULL,
  `settings_other_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_other`
--

INSERT INTO `tmv2_settings_other` (`settings_other_aid`, `settings_other_name`, `settings_other_email`, `settings_other_role`, `settings_other_is_active`, `settings_other_created_at`, `settings_other_updated_at`) VALUES
(2, 'test11111', 'test', 'testt', 1, '2023-09-20 15:26:23', '2023-09-20 15:31:53'),
(3, 'sample', 'sample', 'sample', 1, '2023-09-20 15:26:28', '2023-09-20 15:26:28'),
(4, 'sample1111', 'sample', 'sample', 0, '2023-09-20 15:26:34', '2023-09-20 15:39:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_other`
--
ALTER TABLE `tmv2_settings_other`
  ADD PRIMARY KEY (`settings_other_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_settings_other`
--
ALTER TABLE `tmv2_settings_other`
  MODIFY `settings_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
