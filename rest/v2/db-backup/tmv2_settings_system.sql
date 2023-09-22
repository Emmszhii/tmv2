-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 09:36 AM
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
  `settings_system_roles_id` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_system`
--

INSERT INTO `tmv2_settings_system` (`settings_system_aid`, `settings_system_name`, `settings_system_is_active`, `settings_system_created_at`, `settings_system_updated_at`, `settings_system_email`, `settings_system_roles_id`) VALUES
(26, 'Emmanuel Manalo', 1, '2023-09-22 10:10:31', '2023-09-22 13:31:19', 'emmanuel.manalo@frontlinebusiness.com.ph', '24'),
(27, 'test', 1, '2023-09-22 15:32:21', '2023-09-22 15:32:21', 'test@gmail.com', '26');

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
  MODIFY `settings_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
