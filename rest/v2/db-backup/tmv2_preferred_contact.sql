-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2023 at 07:42 AM
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
-- Table structure for table `tmv2_preferred_contact`
--

CREATE TABLE `tmv2_preferred_contact` (
  `preferred_contact_client_id` varchar(20) NOT NULL,
  `preferred_contact_name` varchar(50) NOT NULL,
  `preferred_contact_title` varchar(50) NOT NULL,
  `preferred_contact_company` varchar(50) NOT NULL,
  `preferred_contact_file_as` varchar(50) NOT NULL,
  `preferred_contact_business_number` varchar(50) NOT NULL,
  `preferred_contact_mobile_number` varchar(50) NOT NULL,
  `preferred_contact_home_number` varchar(50) NOT NULL,
  `preferred_contact_address` varchar(50) NOT NULL,
  `preferred_contact_country` varchar(50) NOT NULL,
  `preferred_contact_zip` varchar(50) NOT NULL,
  `preferred_contact_email` varchar(50) NOT NULL,
  `preferred_contact_updated_at` datetime NOT NULL,
  `preferred_contact_created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_preferred_contact`
--

INSERT INTO `tmv2_preferred_contact` (`preferred_contact_client_id`, `preferred_contact_name`, `preferred_contact_title`, `preferred_contact_company`, `preferred_contact_file_as`, `preferred_contact_business_number`, `preferred_contact_mobile_number`, `preferred_contact_home_number`, `preferred_contact_address`, `preferred_contact_country`, `preferred_contact_zip`, `preferred_contact_email`, `preferred_contact_updated_at`, `preferred_contact_created_at`) VALUES
('27', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_preferred_contact`
--
ALTER TABLE `tmv2_preferred_contact`
  ADD UNIQUE KEY `preferred_contact_client_id` (`preferred_contact_client_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
