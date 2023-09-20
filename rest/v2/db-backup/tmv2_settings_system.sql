-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2023 at 09:41 AM
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
-- Table structure for table `tmv2_settings_system`
--

CREATE TABLE `tmv2_settings_system` (
  `settings_system_aid` int(11) NOT NULL,
  `settings_system_name` varchar(100) NOT NULL,
  `settings_system_is_active` tinyint(1) NOT NULL,
  `settings_system_created_at` datetime NOT NULL,
  `settings_system_updated_at` datetime NOT NULL,
  `settings_system_email` varchar(100) NOT NULL,
  `settings_system_role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_system`
--

INSERT INTO `tmv2_settings_system` (`settings_system_aid`, `settings_system_name`, `settings_system_is_active`, `settings_system_created_at`, `settings_system_updated_at`, `settings_system_email`, `settings_system_role`) VALUES
(1, 'sample1', 1, '2023-09-20 13:30:07', '2023-09-20 14:33:47', 'sample1@gmail.com', 'developers'),
(3, 'sample', 0, '2023-09-20 15:00:06', '2023-09-20 15:06:13', 'sample', 'sample'),
(4, 'emms', 1, '2023-09-20 15:00:14', '2023-09-20 15:00:14', 'emms', 'sample'),
(5, 'test', 1, '2023-09-20 15:00:24', '2023-09-20 15:00:24', 'test', 'test'),
(6, 'test', 1, '2023-09-20 15:00:28', '2023-09-20 15:00:28', 'test', 'test'),
(7, 'test', 1, '2023-09-20 15:00:32', '2023-09-20 15:00:32', 'test', 'test'),
(8, 'sample1@gmail.com', 1, '2023-09-20 15:00:55', '2023-09-20 15:00:55', 'sample1@gmail.com', 'sample1@gmail.com'),
(9, 'test', 1, '2023-09-20 15:23:11', '2023-09-20 15:23:11', 'test', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_system`
--
ALTER TABLE `tmv2_settings_system`
  ADD PRIMARY KEY (`settings_system_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_settings_system`
--
ALTER TABLE `tmv2_settings_system`
  MODIFY `settings_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
