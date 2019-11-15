-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 15, 2017 at 08:42 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beard`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `sl_no` int(11) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`sl_no`, `f_name`, `l_name`, `email`, `password`, `dob`, `gender`) VALUES
(1, 'h', 'n', 'n', 'n', 'n', 'j'),
(2, '5', '2', '2', '0', '2', '5'),
(3, '5', '2', '2', '0', '2', '5'),
(4, '5', '2', '2', '0', '2', '5'),
(5, 'Firstname', 'Lastname', 'Email', 'Password', 'dob', 'Gender'),
(6, 'Farshad', 'kalz', 'farshadkalathingal@gmail.com', '9544221323', '1995-10-18T18:30:00.000Z', 'Male'),
(7, 'rajeena', 'k', 'rajeenakormath@gmail.com', '123456', '1949-10-09T18:30:00.000Z', 'Female'),
(8, 'love', 'k', 'kjnjnjjn@gamil', '456', '1902-04-09T18:30:00.000Z', 'Unknown');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`sl_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `sl_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
