-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 02:04 AM
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
-- Table structure for table `tmv2_client_class`
--

CREATE TABLE `tmv2_client_class` (
  `client_class_aid` int(11) NOT NULL,
  `client_class_is_active` tinyint(1) NOT NULL,
  `client_class_name` varchar(100) NOT NULL,
  `client_class_created_at` datetime NOT NULL,
  `client_class_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_client_class`
--

INSERT INTO `tmv2_client_class` (`client_class_aid`, `client_class_is_active`, `client_class_name`, `client_class_created_at`, `client_class_updated_at`) VALUES
(2, 1, 'ssss', '2023-09-21 15:34:09', '2023-09-21 15:34:09'),
(3, 1, '2222', '2023-09-21 15:34:11', '2023-09-21 15:34:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_client_class`
--
ALTER TABLE `tmv2_client_class`
  ADD PRIMARY KEY (`client_class_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_client_class`
--
ALTER TABLE `tmv2_client_class`
  MODIFY `client_class_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
