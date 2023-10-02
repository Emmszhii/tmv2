-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2023 at 08:30 AM
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
-- Table structure for table `tmv2_custom_field`
--

CREATE TABLE `tmv2_custom_field` (
  `custom_field_client_id` varchar(20) NOT NULL,
  `custom_field_ar_agent` varchar(50) NOT NULL,
  `custom_field_s1_550` varchar(50) NOT NULL,
  `custom_field_incorporate_state` varchar(50) NOT NULL,
  `custom_field_submit_annual_filling` varchar(50) NOT NULL,
  `custom_field_email_flag` varchar(50) NOT NULL,
  `custom_field_agent_name` varchar(50) NOT NULL,
  `custom_field_agent_flag` varchar(50) NOT NULL,
  `custom_field_atena` varchar(50) NOT NULL,
  `custom_field_cc_email` varchar(50) NOT NULL,
  `custom_field_eng_doc` varchar(50) NOT NULL,
  `custom_field_share_file_flag` varchar(50) NOT NULL,
  `custom_field_updated_at` datetime NOT NULL,
  `custom_field_created_at` datetime NOT NULL,
  `custom_field_covid_assistant` varchar(50) NOT NULL,
  `custom_field_type_retirement` varchar(50) NOT NULL,
  `custom_field_user_deposit_name` varchar(50) NOT NULL,
  `custom_field_retirement_plans` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
