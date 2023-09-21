-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2023 at 09:38 AM
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
-- Table structure for table `tmv2_engagement_category`
--

CREATE TABLE `tmv2_engagement_category` (
  `engagement_category_aid` int(11) NOT NULL,
  `engagement_category_is_active` tinyint(1) NOT NULL,
  `engagement_category_id` varchar(50) NOT NULL,
  `engagement_category_description` varchar(100) NOT NULL,
  `engagement_category_invoice_description` varchar(200) NOT NULL,
  `engagement_category_created_at` datetime NOT NULL,
  `engagement_category_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_engagement_category`
--

INSERT INTO `tmv2_engagement_category` (`engagement_category_aid`, `engagement_category_is_active`, `engagement_category_id`, `engagement_category_description`, `engagement_category_invoice_description`, `engagement_category_created_at`, `engagement_category_updated_at`) VALUES
(2, 0, 'rrrww', 'rr', '1111', '2023-09-20 14:31:30', '0000-00-00 00:00:00'),
(3, 1, 'Test', 'Test', '1111TestTest', '2023-09-20 14:37:02', '2023-09-20 14:40:29'),
(4, 1, 'TestTest', 'TestTest', 'TestTest', '2023-09-20 14:37:10', '2023-09-20 14:40:34'),
(5, 1, 'TestTestTest', 'TestTestTest', 'TestTestTest', '2023-09-20 14:37:15', '2023-09-20 14:40:38'),
(6, 1, 'TestTestTestTest', 'TestTest', 'TestTest', '2023-09-20 14:37:20', '2023-09-20 14:40:43'),
(7, 1, 'TestTest', 'TestTestTest', 'TestTestTest', '2023-09-20 14:40:55', '2023-09-20 14:40:55'),
(8, 1, 'TestTestTest', 'TestTestTestTest', 'TestTestTestTest', '2023-09-20 14:41:00', '2023-09-20 14:41:00'),
(9, 1, 'TestTestTestTest', 'TestTestTestTest', 'TestTestTest', '2023-09-20 14:41:12', '2023-09-20 14:41:12'),
(10, 1, 'TestTestTest', 'TestTestTestTest', 'TestTestTestTest', '2023-09-20 14:41:17', '2023-09-20 14:41:17'),
(11, 1, 'TestTestTest', 'TestTestTestTest', 'TestTestTestTest', '2023-09-20 14:41:21', '2023-09-20 14:41:21'),
(12, 1, 'TestTestTest', 'TestTestTestTestTest', 'Test', '2023-09-20 14:41:26', '2023-09-20 14:41:26'),
(13, 1, 'saasdad', 'sadasdsad', 'sadsadasd', '2023-09-20 14:41:32', '2023-09-20 14:41:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_engagement_category`
--
ALTER TABLE `tmv2_engagement_category`
  ADD PRIMARY KEY (`engagement_category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_engagement_category`
--
ALTER TABLE `tmv2_engagement_category`
  MODIFY `engagement_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
