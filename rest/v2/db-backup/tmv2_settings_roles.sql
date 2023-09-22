-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 06:27 AM
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
-- Table structure for table `tmv2_settings_roles`
--

CREATE TABLE `tmv2_settings_roles` (
  `settings_roles_aid` int(11) NOT NULL,
  `settings_roles_name` varchar(100) NOT NULL,
  `settings_roles_description` text NOT NULL,
  `settings_roles_is_active` tinyint(1) NOT NULL,
  `settings_roles_created_at` datetime NOT NULL,
  `settings_roles_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_roles`
--

INSERT INTO `tmv2_settings_roles` (`settings_roles_aid`, `settings_roles_name`, `settings_roles_description`, `settings_roles_is_active`, `settings_roles_created_at`, `settings_roles_updated_at`) VALUES
(24, 'Developer', 'Developer', 1, '2023-09-22 09:28:42', '2023-09-22 09:36:26'),
(26, 'Admin', 'Admin', 1, '2023-09-22 09:36:06', '2023-09-22 09:36:06'),
(28, 'Sample', 'Sample', 1, '2023-09-22 10:24:03', '2023-09-22 10:24:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_roles`
--
ALTER TABLE `tmv2_settings_roles`
  ADD PRIMARY KEY (`settings_roles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_settings_roles`
--
ALTER TABLE `tmv2_settings_roles`
  MODIFY `settings_roles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
