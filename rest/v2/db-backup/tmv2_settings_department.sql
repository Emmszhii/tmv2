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
-- Table structure for table `tmv2_settings_department`
--

CREATE TABLE `tmv2_settings_department` (
  `settings_department_aid` int(11) NOT NULL,
  `settings_department_name` varchar(100) NOT NULL,
  `settings_department_is_active` tinyint(1) NOT NULL,
  `settings_department_created_at` datetime NOT NULL,
  `settings_department_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_department`
--

INSERT INTO `tmv2_settings_department` (`settings_department_aid`, `settings_department_name`, `settings_department_is_active`, `settings_department_created_at`, `settings_department_updated_at`) VALUES
(8, 'sample', 1, '2023-09-22 12:22:08', '2023-09-22 12:22:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_department`
--
ALTER TABLE `tmv2_settings_department`
  ADD PRIMARY KEY (`settings_department_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_settings_department`
--
ALTER TABLE `tmv2_settings_department`
  MODIFY `settings_department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
