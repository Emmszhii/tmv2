-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2023 at 09:39 AM
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
-- Table structure for table `tmv2_engagement_template`
--

CREATE TABLE `tmv2_engagement_template` (
  `engagement_template_aid` int(11) NOT NULL,
  `engagement_template_is_active` tinyint(1) NOT NULL,
  `engagement_template_id` varchar(50) NOT NULL,
  `engagement_template_description` varchar(100) NOT NULL,
  `engagement_template_invoice_description` varchar(200) NOT NULL,
  `engagement_template_created_at` datetime NOT NULL,
  `engagement_template_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_engagement_template`
--

INSERT INTO `tmv2_engagement_template` (`engagement_template_aid`, `engagement_template_is_active`, `engagement_template_id`, `engagement_template_description`, `engagement_template_invoice_description`, `engagement_template_created_at`, `engagement_template_updated_at`) VALUES
(1, 1, '11s', '11', '111', '2023-09-20 15:31:06', '2023-09-20 15:31:15'),
(3, 1, 'sssssssssss', 'sssssssss', 'ssssssss', '2023-09-20 15:31:33', '2023-09-20 15:31:33'),
(4, 1, 'ssssssss', 'sssssssssss', 'sssss', '2023-09-20 15:31:41', '2023-09-20 15:31:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_engagement_template`
--
ALTER TABLE `tmv2_engagement_template`
  ADD PRIMARY KEY (`engagement_template_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_engagement_template`
--
ALTER TABLE `tmv2_engagement_template`
  MODIFY `engagement_template_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
