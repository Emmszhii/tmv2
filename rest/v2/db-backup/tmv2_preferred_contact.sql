-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2023 at 08:17 AM
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
  `preferred_contact_name` int(11) NOT NULL,
  `preferred_contact_title` int(11) NOT NULL,
  `preferred_contact_company` int(11) NOT NULL,
  `preferred_contact_file_as` int(11) NOT NULL,
  `preferred_contact_business_number` int(11) NOT NULL,
  `preferred_contact_home_number` int(11) NOT NULL,
  `preferred_contact_address` int(11) NOT NULL,
  `preferred_contact_country` int(11) NOT NULL,
  `preferred_contact_zip` int(11) NOT NULL,
  `preferred_contact_email` int(11) NOT NULL,
  `preferred_contact_updated_at` int(11) NOT NULL,
  `preferred_contact_created_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
