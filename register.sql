-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2017 at 07:22 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `beard`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE IF NOT EXISTS `register` (
  `sl_no` int(11) NOT NULL AUTO_INCREMENT,
  `f_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `gender` varchar(50) NOT NULL,
  PRIMARY KEY (`sl_no`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`sl_no`, `f_name`, `l_name`, `email`, `password`, `dob`, `gender`) VALUES
(1, 'h', 'n', 'n', 'n', 'n', 'j');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
