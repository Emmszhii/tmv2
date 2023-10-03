-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2023 at 09:02 AM
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
  `client_name_2` varchar(100) NOT NULL,
  `client_ein_ssn` varchar(50) NOT NULL,
  `client_entities_id` varchar(20) NOT NULL,
  `client_partner_id` varchar(20) NOT NULL,
  `client_manager_id` varchar(20) NOT NULL,
  `client_associate_id` varchar(20) NOT NULL,
  `client_individual_first_name` varchar(100) NOT NULL,
  `client_individual_last_name` varchar(100) NOT NULL,
  `client_individual_date_of_birth` varchar(20) NOT NULL,
  `client_spouse_first_name` varchar(100) NOT NULL,
  `client_spouse_last_name` varchar(100) NOT NULL,
  `client_spouse_date_of_birth` varchar(20) NOT NULL,
  `client_class` varchar(50) NOT NULL,
  `client_info_date_started` varchar(20) NOT NULL,
  `client_info_date_left` varchar(20) NOT NULL,
  `client_info_office` varchar(50) NOT NULL,
  `client_info_partner` varchar(50) NOT NULL,
  `client_info_manager` varchar(50) NOT NULL,
  `client_info_associate` varchar(50) NOT NULL,
  `client_info_entity` varchar(50) NOT NULL,
  `client_info_wp_limit` varchar(50) NOT NULL,
  `client_info_ar_limit` varchar(50) NOT NULL,
  `client_retention_referred_type_id` varchar(20) NOT NULL,
  `client_retention_referred_by_id` varchar(20) NOT NULL,
  `client_retention_won_date` varchar(20) NOT NULL,
  `client_retention_won_reason_id` varchar(20) NOT NULL,
  `client_retention_lost_to_id` varchar(50) NOT NULL,
  `client_retention_lost_reason_id` varchar(50) NOT NULL,
  `client_is_active` tinyint(1) NOT NULL,
  `client_created_at` datetime NOT NULL,
  `client_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_client`
--

INSERT INTO `tmv2_client` (`client_aid`, `client_client_id`, `client_description`, `client_name`, `client_name_2`, `client_ein_ssn`, `client_entities_id`, `client_partner_id`, `client_manager_id`, `client_associate_id`, `client_individual_first_name`, `client_individual_last_name`, `client_individual_date_of_birth`, `client_spouse_first_name`, `client_spouse_last_name`, `client_spouse_date_of_birth`, `client_class`, `client_info_date_started`, `client_info_date_left`, `client_info_office`, `client_info_partner`, `client_info_manager`, `client_info_associate`, `client_info_entity`, `client_info_wp_limit`, `client_info_ar_limit`, `client_retention_referred_type_id`, `client_retention_referred_by_id`, `client_retention_won_date`, `client_retention_won_reason_id`, `client_retention_lost_to_id`, `client_retention_lost_reason_id`, `client_is_active`, `client_created_at`, `client_updated_at`) VALUES
(2, 'TESTING', 'test', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:26:26', '2023-09-22 08:26:26'),
(3, 'TEST', 'test', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:26:30', '2023-09-22 08:26:30'),
(4, 'ADD', 'add description', 'SAMPLE11', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:30:56', '2023-09-25 15:37:49'),
(5, 'MINUS', 'minus', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:31:02', '2023-09-22 08:31:02'),
(6, 'CLIENT', 'client', 'CLIENT SAMPLE', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:31:07', '2023-09-25 15:18:35'),
(7, 'DESCRIPTION', 'description', 'SAMPLE DESCRIPTION', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:31:16', '2023-09-26 08:16:26'),
(8, 'MULTIPLY', 'multiply', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:33:22', '2023-09-22 08:33:22'),
(9, 'REQUIRED', 'required', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:33:33', '2023-09-22 08:33:33'),
(10, 'STAFF', 'staff', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:33:44', '2023-09-22 08:33:44'),
(11, 'ADDITION', 'add', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '2023-09-22 08:34:21', '2023-09-25 13:06:36'),
(12, 'SUBTRACTIONS', 'subtraction', 'SUBSTRACT', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:34:29', '2023-09-25 13:29:11'),
(13, 'DIVIDE', 'dividedas', 'ASDAS', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-22 08:34:36', '2023-09-28 09:54:05'),
(14, 'TESTING1', 'testinggg', 'testing', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-25 10:09:32', '2023-09-25 10:09:32'),
(15, 'TESTIN', 'testingggg', 'testin', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-26 08:31:47', '2023-09-26 08:31:47'),
(16, 'TRY', 'try', 'tr', '', '', '3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-28 09:43:44', '2023-09-28 09:43:44'),
(17, 'ASDA', 'dasda', 'SDAS', '', '', '21', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-28 09:58:31', '2023-09-28 09:58:31'),
(18, 'QQQQQQ', 'qqqqqqqqqqq', 'QQQQQQQQQQQ', '', '', '21', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-28 10:18:15', '2023-09-28 10:18:15'),
(20, 'SSSSSSSSSSS', 'sssssssssss', 'SSSSSSSSS', '', '', '3', '6', '6', '6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-28 14:13:15', '2023-09-28 14:43:57'),
(21, 'QQQQQQQQQQQQQQQ', 'qqqqqqqqqqqqqqqqq', 'QQQQQQQQQQQQQQ', '', '', '4', '5', '6', '5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-09-28 14:41:51', '2023-09-28 14:41:51'),
(27, 'AAASAMPLE', 'aaasample', 'AAASAMPLE', '', '', '3', '', '', '5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 1, '2023-10-02 14:43:35', '2023-10-03 10:10:43');

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
  MODIFY `client_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
