-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 07:11 AM
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
-- Table structure for table `tmv2_referral_source`
--

CREATE TABLE `tmv2_referral_source` (
  `referral_source_aid` int(11) NOT NULL,
  `referral_source_is_active` tinyint(1) NOT NULL,
  `referral_source_name` varchar(100) NOT NULL,
  `referral_source_created_at` datetime NOT NULL,
  `referral_source_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_referral_source`
--

INSERT INTO `tmv2_referral_source` (`referral_source_aid`, `referral_source_is_active`, `referral_source_name`, `referral_source_created_at`, `referral_source_updated_at`) VALUES
(2, 1, 'ssss', '2023-09-21 13:10:09', '2023-09-21 13:10:09'),
(3, 1, 'Rhico', '2023-09-21 13:10:13', '2023-09-21 13:10:13'),
(4, 1, 'testing', '2023-09-21 13:10:18', '2023-09-21 13:10:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_referral_source`
--
ALTER TABLE `tmv2_referral_source`
  ADD PRIMARY KEY (`referral_source_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_referral_source`
--
ALTER TABLE `tmv2_referral_source`
  MODIFY `referral_source_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
