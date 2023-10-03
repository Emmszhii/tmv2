-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2023 at 08:04 AM
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
-- Table structure for table `tmv2_staff`
--

CREATE TABLE `tmv2_staff` (
  `staff_aid` int(11) NOT NULL,
  `staff_is_active` tinyint(1) NOT NULL,
  `staff_id` varchar(50) NOT NULL,
  `staff_description` varchar(100) NOT NULL,
  `staff_first_name` varchar(100) NOT NULL,
  `staff_last_name` varchar(100) NOT NULL,
  `staff_middle_name` varchar(100) NOT NULL,
  `staff_department` varchar(100) NOT NULL,
  `staff_date_hired` date NOT NULL,
  `staff_office` varchar(100) NOT NULL,
  `staff_level` varchar(50) NOT NULL,
  `staff_supervisor` varchar(50) NOT NULL,
  `staff_education_met` varchar(20) NOT NULL,
  `staff_experience_met` varchar(20) NOT NULL,
  `staff_exam_passed` varchar(20) NOT NULL,
  `staff_date_certified` varchar(20) NOT NULL,
  `staff_certification_number` varchar(20) NOT NULL,
  `staff_contact_name` varchar(100) NOT NULL,
  `staff_contact_email` varchar(50) NOT NULL,
  `staff_contact_mobile_no` varchar(20) NOT NULL,
  `staff_contact_home_no` varchar(20) NOT NULL,
  `staff_contact_file_as` varchar(100) NOT NULL,
  `staff_contact_company` varchar(100) NOT NULL,
  `staff_contact_business_no` varchar(50) NOT NULL,
  `staff_created_at` datetime NOT NULL,
  `staff_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_staff`
--

INSERT INTO `tmv2_staff` (`staff_aid`, `staff_is_active`, `staff_id`, `staff_description`, `staff_first_name`, `staff_last_name`, `staff_middle_name`, `staff_department`, `staff_date_hired`, `staff_office`, `staff_level`, `staff_supervisor`, `staff_education_met`, `staff_experience_met`, `staff_exam_passed`, `staff_date_certified`, `staff_certification_number`, `staff_contact_name`, `staff_contact_email`, `staff_contact_mobile_no`, `staff_contact_home_no`, `staff_contact_file_as`, `staff_contact_company`, `staff_contact_business_no`, `staff_created_at`, `staff_updated_at`) VALUES
(26, 1, 'RDJ', 'This is a test', 'Rhico', 'DM', 's', '', '2023-10-03', '', 'ss', 'sss', '', '', '', '', '', '', '', '', '', '', '', '', '2023-10-03 13:04:36', '2023-10-03 13:59:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmv2_staff`
--
ALTER TABLE `tmv2_staff`
  ADD PRIMARY KEY (`staff_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmv2_staff`
--
ALTER TABLE `tmv2_staff`
  MODIFY `staff_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
