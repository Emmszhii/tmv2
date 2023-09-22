-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 09:26 AM
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
  `staff_date_hired` datetime NOT NULL,
  `staff_office` varchar(100) NOT NULL,
  `staff_created_at` datetime NOT NULL,
  `staff_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmv2_staff`
--

INSERT INTO `tmv2_staff` (`staff_aid`, `staff_is_active`, `staff_id`, `staff_description`, `staff_first_name`, `staff_last_name`, `staff_middle_name`, `staff_department`, `staff_date_hired`, `staff_office`, `staff_created_at`, `staff_updated_at`) VALUES
(5, 1, 'ASF', 'SSSS', 'JAMES', 'REID', 'PADILLA', 'ACCOUNTING', '2023-09-21 00:00:00', 'TESTING', '2023-09-22 13:10:23', '2023-09-22 13:10:23'),
(6, 1, 'EMMS', 'Human Computer', 'EMMANUAL', 'MANALO', 'NATALO', 'WEB', '2023-09-03 00:00:00', 'TESTING', '2023-09-22 15:25:12', '2023-09-22 15:25:12');

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
  MODIFY `staff_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
