-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 08:08 AM
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
-- Table structure for table `tmv2_settings_office`
--

CREATE TABLE `tmv2_settings_office` (
  `settings_office_aid` int(11) NOT NULL,
  `settings_office_name` varchar(100) NOT NULL,
  `settings_office_description` varchar(100) NOT NULL,
  `settings_office_is_active` int(11) NOT NULL,
  `settings_office_created_at` int(11) NOT NULL,
  `settings_office_updated_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_settings_office`
--

INSERT INTO `tmv2_settings_office` (`settings_office_aid`, `settings_office_name`, `settings_office_description`, `settings_office_is_active`, `settings_office_created_at`, `settings_office_updated_at`) VALUES
(1, 'SAMPLE', 'sample', 0, 2023, 2023),
(2, 'TESTING', 'testing', 1, 2023, 2023);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_settings_office`
--
ALTER TABLE `tmv2_settings_office`
  ADD PRIMARY KEY (`settings_office_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_settings_office`
--
ALTER TABLE `tmv2_settings_office`
  MODIFY `settings_office_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
