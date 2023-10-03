-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2023 at 07:43 AM
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
-- Table structure for table `tmv2_billing_contact`
--

CREATE TABLE `tmv2_billing_contact` (
  `billing_contact_client_id` varchar(20) NOT NULL,
  `billing_contact_name` varchar(100) NOT NULL,
  `billing_contact_title` varchar(50) NOT NULL,
  `billing_contact_company` varchar(50) NOT NULL,
  `billing_contact_file_as` varchar(50) NOT NULL,
  `billing_contact_business_number` varchar(50) NOT NULL,
  `billing_contact_home_number` varchar(50) NOT NULL,
  `billing_contact_mobile_number` varchar(50) NOT NULL,
  `billing_contact_address` varchar(50) NOT NULL,
  `billing_contact_country` varchar(50) NOT NULL,
  `billing_contact_zip` varchar(50) NOT NULL,
  `billing_contact_email` text NOT NULL,
  `billing_contact_updated_at` varchar(50) NOT NULL,
  `billing_contact_created_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_billing_contact`
--

INSERT INTO `tmv2_billing_contact` (`billing_contact_client_id`, `billing_contact_name`, `billing_contact_title`, `billing_contact_company`, `billing_contact_file_as`, `billing_contact_business_number`, `billing_contact_home_number`, `billing_contact_mobile_number`, `billing_contact_address`, `billing_contact_country`, `billing_contact_zip`, `billing_contact_email`, `billing_contact_updated_at`, `billing_contact_created_at`) VALUES
('27', '', '', '', '', '', '', '', '', '', '', '', '2023-10-02 14:43:35', '2023-10-02 14:43:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_billing_contact`
--
ALTER TABLE `tmv2_billing_contact`
  ADD UNIQUE KEY `billing_contact_client_id` (`billing_contact_client_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
