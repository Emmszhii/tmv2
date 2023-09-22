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
-- Table structure for table `tmv2_client`
--

CREATE TABLE `tmv2_client` (
  `client_aid` int(11) NOT NULL,
  `client_client_id` varchar(100) NOT NULL,
  `client_description` varchar(100) NOT NULL,
  `client_name` varchar(100) NOT NULL,
  `client_is_active` tinyint(1) NOT NULL,
  `client_created_at` datetime NOT NULL,
  `client_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_client`
--

INSERT INTO `tmv2_client` (`client_aid`, `client_client_id`, `client_description`, `client_name`, `client_is_active`, `client_created_at`, `client_updated_at`) VALUES
(1, 'SAMPLE', 'sample', '', 0, '2023-09-22 08:24:06', '2023-09-22 08:28:35'),
(2, 'TESTING', 'test', '', 1, '2023-09-22 08:26:26', '2023-09-22 08:26:26'),
(3, 'TEST', 'test', '', 1, '2023-09-22 08:26:30', '2023-09-22 08:26:30'),
(4, 'ADD', 'add', '', 1, '2023-09-22 08:30:56', '2023-09-22 08:30:56'),
(5, 'MINUS', 'minus', '', 1, '2023-09-22 08:31:02', '2023-09-22 08:31:02'),
(6, 'CLIENT', 'client', '', 1, '2023-09-22 08:31:07', '2023-09-22 08:31:07'),
(7, 'DESCRIPTION', 'description', '', 1, '2023-09-22 08:31:16', '2023-09-22 08:31:16'),
(8, 'MULTIPLY', 'multiply', '', 1, '2023-09-22 08:33:22', '2023-09-22 08:33:22'),
(9, 'REQUIRED', 'required', '', 1, '2023-09-22 08:33:33', '2023-09-22 08:33:33'),
(10, 'STAFF', 'staff', '', 1, '2023-09-22 08:33:44', '2023-09-22 08:33:44'),
(11, 'ADDITION', 'add', '', 1, '2023-09-22 08:34:21', '2023-09-22 08:34:21'),
(12, 'SUBTRACTION', 'subtraction', '', 1, '2023-09-22 08:34:29', '2023-09-22 08:34:29'),
(13, 'DIVIDE', 'divide', '', 1, '2023-09-22 08:34:36', '2023-09-22 08:34:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_client`
--
ALTER TABLE `tmv2_client`
  ADD PRIMARY KEY (`client_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_client`
--
ALTER TABLE `tmv2_client`
  MODIFY `client_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
