-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2023 at 08:14 AM
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
-- Table structure for table `tmv2_primary_contact`
--

CREATE TABLE `tmv2_primary_contact` (
  `primary_contact_client_id` varchar(20) NOT NULL,
  `primary_contact_name` varchar(100) NOT NULL,
  `primary_contact_title` varchar(100) NOT NULL,
  `primary_contact_company` varchar(50) NOT NULL,
  `primary_contact_file_as` varchar(100) NOT NULL,
  `primary_contact_business_number` varchar(50) NOT NULL,
  `primary_contact_home_number` varchar(100) NOT NULL,
  `primary_contact_address` varchar(100) NOT NULL,
  `primary_contact_country` varchar(50) NOT NULL,
  `primary_contact_zip` varchar(20) NOT NULL,
  `primary_contact_email` varchar(100) NOT NULL,
  `primary_contact_updated_at` datetime NOT NULL,
  `primary_contact_created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
