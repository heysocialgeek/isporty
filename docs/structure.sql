-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2022 at 12:45 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `structure`
--

DROP DATABASE IF EXISTS `structure`;
CREATE DATABASE `structure`;
USE `structure`;

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Nike', NULL, NULL),
(2, 'Adidas', NULL, NULL),
(3, 'Topper', NULL, NULL),
(4, 'Puma', NULL, NULL),
(5, 'Fila', NULL, NULL),
(6, 'Kappa', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Running', NULL, NULL),
(2, 'F??tbol', NULL, NULL),
(3, 'Street', NULL, NULL),
(4, 'Verano', NULL, NULL),
(5, 'Hockey', NULL, NULL),
(6, 'B??squet', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Blanco', NULL, NULL),
(2, 'Negro', NULL, NULL),
(3, 'Amarillo', NULL, NULL),
(4, 'Violeta', NULL, NULL),
(5, 'Rojo', NULL, NULL),
(6, 'Azul', NULL, NULL),
(7, 'verde', NULL, NULL),
(8, 'Rosa', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Masculino', NULL, NULL),
(2, 'Femenino', NULL, NULL),
(3, 'Unisex', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productcart`
--

CREATE TABLE `productcart` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `cartId` int(10) UNSIGNED DEFAULT NULL,
  `productPrice` decimal(8,2) DEFAULT NULL,
  `quantity` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productcategory`
--

CREATE TABLE `productcategory` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `categoryId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `productcategory`
--

INSERT INTO `productcategory` (`id`, `productId`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(17, 16, 2, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(18, 17, 2, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(19, 18, 1, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(20, 19, 1, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(21, 20, 1, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(22, 21, 1, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(23, 21, 3, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(24, 22, 1, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(25, 23, 3, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(28, 25, 3, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(29, 26, 1, '2022-03-22 15:05:52', '2022-03-22 15:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `productcolor`
--

CREATE TABLE `productcolor` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `colorId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `productcolor`
--

INSERT INTO `productcolor` (`id`, `productId`, `colorId`, `createdAt`, `updatedAt`) VALUES
(9, 16, 6, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(10, 17, 1, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(11, 17, 2, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(12, 17, 3, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(13, 18, 1, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(14, 18, 2, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(15, 18, 5, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(16, 18, 6, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(17, 19, 1, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(18, 19, 2, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(19, 20, 1, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(20, 20, 2, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(21, 21, 1, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(22, 21, 2, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(23, 21, 5, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(24, 21, 6, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(25, 22, 1, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(26, 22, 3, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(27, 22, 4, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(28, 22, 5, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(29, 22, 6, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(30, 23, 1, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(31, 23, 2, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(32, 23, 4, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(36, 25, 1, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(37, 25, 2, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(38, 26, 1, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(39, 26, 2, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(40, 26, 3, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(41, 26, 4, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(42, 26, 5, '2022-03-22 15:05:52', '2022-03-22 15:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'no-image.png',
  `description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `brandId` int(10) UNSIGNED DEFAULT NULL,
  `genderId` int(10) UNSIGNED DEFAULT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `description`, `brandId`, `genderId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(16, 'ELIMINAR', '12999.00', '1647917570739_img.jpg', 'Calzado Botines Nike Jr Superfly Vii Elite Fg De F??tbol', 1, 3, '2022-03-22 02:52:50', '2022-03-22 02:52:50', '2022-03-22 15:14:05'),
(17, 'Botines Mercurial Nike', '12999.00', '1647960659577_img.jpeg', 'Botines Nike Jr Superfly Vii Elite Fg De F??tbol', 1, 1, '2022-03-22 14:50:59', '2022-03-22 14:50:59', NULL),
(18, 'Zapatilla Adidas Tensaur Running', '18000.00', '1647960728991_img.jpg', 'Zapatillas que ofrecen la versatilidad necesaria para el uso diario. Estas zapatillas Adidas son perfectas para la aventura.', 2, 1, '2022-03-22 14:52:08', '2022-03-22 14:52:08', NULL),
(19, 'Zapatillas Adidas Grand Court', '13400.00', '1647960790679_img.jpg', 'Zapatillas cl??sicas para todo momento, sea una salida casual o salir a caminar. Ideal para combinar con la colecci??n Grand.', 2, 1, '2022-03-22 14:53:10', '2022-03-22 14:53:10', NULL),
(20, 'Zapatilla Puma Flyer Flex ', '11150.00', '1647960975061_img.jpg', 'Marca alemana con una amplia colecci??n de accesorios, ropa y calzado deportivo fabricada con los m??s altos est??ndares de calidad acompa??ando la pasi??n por los deportes y por un estilo de vida saludable.', 4, 2, '2022-03-22 14:56:15', '2022-03-22 14:56:15', NULL),
(21, 'Zapatilla Fila Disruptor Ii Premium', '22400.00', '1647961091195_img.jpg', 'Un versi??n actualizada de la famosa silueta de los 90s. Estas Fila Disruptor para mujer son un ??cono de la moda urbana, son cl??sicas y combinables. Est??n confeccionadas en material sint??tico con una suela de EVA liviana que aporta comodidad en cada paso.', 5, 1, '2022-03-22 14:58:11', '2022-03-22 14:58:11', NULL),
(22, 'Zapatilla Fila Mujer Mindblower', '9400.00', '1647961229091_img.jpg', 'El upper mantiene su fidelidad a los or??genes en cuanto a est??tica se refiere, respecto a los materiales utilizado, se ha dado paso a un piel sint??tica m??s ligera, cuyo interior esta reforzado con un forro textil muy suave al tacto.', 5, 2, '2022-03-22 15:00:29', '2022-03-22 15:00:29', NULL),
(23, 'Zapatilla Fila MB L12', '24500.00', '1647961325612_img.jpg', 'Aunque las zapatillas parezcan robustas y voluminosas, nada tiene que ver con la sensaci??n de pisar sobre estas zapatillas, en la cual su espuma de doble densidad proporciona un confort excelente. ', 5, 1, '2022-03-22 15:02:05', '2022-03-22 15:02:05', NULL),
(24, 'Zapatillas Nike Lunarepic Flyknit', '19999.00', '1647961390337_img.jpg', 'S??mate a la lujosa comodidad de las zapatillas de running Nike Flyknit LunarEpic para mujer. Est?? afinado con precisi??n con una parte superior construida Flyknit y espuma Lunarlon sensible para ofrecer una conducci??n suave kil??metro tras kil??metro.\r\n ', 1, 3, '2022-03-22 15:03:10', '2022-03-23 23:44:53', NULL),
(25, 'Zapatillas Entrenamiento Metcon ', '11199.00', '1647961497008_img.jpg', 'Zapatillas Nike Metcon 5 Originales / Rinc??n del F??tbol', 1, 3, '2022-03-22 15:04:57', '2022-03-22 15:04:57', NULL),
(26, 'Zapatilla Kappa Authentic Kassidy1', '8999.00', '1647961552632_img.jpg', 'Zapatilla Kappa moda urbana al mejor estilo de New York.', 6, 2, '2022-03-22 15:05:52', '2022-03-22 15:05:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productsize`
--

CREATE TABLE `productsize` (
  `id` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL,
  `sizeId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `productsize`
--

INSERT INTO `productsize` (`id`, `productId`, `sizeId`, `createdAt`, `updatedAt`) VALUES
(16, 16, 6, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(17, 16, 7, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(18, 16, 8, '2022-03-22 02:52:50', '2022-03-22 02:52:50'),
(19, 17, 1, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(20, 17, 3, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(21, 17, 5, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(22, 17, 6, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(23, 17, 7, '2022-03-22 14:50:59', '2022-03-22 14:50:59'),
(24, 18, 4, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(25, 18, 6, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(26, 18, 7, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(27, 18, 8, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(28, 18, 9, '2022-03-22 14:52:09', '2022-03-22 14:52:09'),
(29, 19, 1, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(30, 19, 5, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(31, 19, 6, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(32, 19, 7, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(33, 19, 8, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(34, 19, 9, '2022-03-22 14:53:10', '2022-03-22 14:53:10'),
(35, 20, 1, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(36, 20, 2, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(37, 20, 3, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(38, 20, 4, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(39, 20, 5, '2022-03-22 14:56:15', '2022-03-22 14:56:15'),
(40, 21, 1, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(41, 21, 2, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(42, 21, 3, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(43, 21, 4, '2022-03-22 14:58:11', '2022-03-22 14:58:11'),
(44, 22, 1, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(45, 22, 2, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(46, 22, 3, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(47, 22, 4, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(48, 22, 5, '2022-03-22 15:00:29', '2022-03-22 15:00:29'),
(49, 23, 6, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(50, 23, 7, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(51, 23, 8, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(52, 23, 9, '2022-03-22 15:02:05', '2022-03-22 15:02:05'),
(64, 25, 7, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(65, 25, 8, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(66, 25, 9, '2022-03-22 15:04:57', '2022-03-22 15:04:57'),
(67, 26, 1, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(68, 26, 2, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(69, 26, 3, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(70, 26, 4, '2022-03-22 15:05:52', '2022-03-22 15:05:52'),
(71, 26, 5, '2022-03-22 15:05:52', '2022-03-22 15:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '35', NULL, NULL),
(2, '36', NULL, NULL),
(3, '37', NULL, NULL),
(4, '38', NULL, NULL),
(5, '39', NULL, NULL),
(6, '40', NULL, NULL),
(7, '41', NULL, NULL),
(8, '42', NULL, NULL),
(9, '43', NULL, NULL),
(10, '44', NULL, NULL),
(11, '45', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'no-image.png',
  `cartId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `cartId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Joaquin', 'goku@gmail.com', '$2a$10$pu1wiGNJwthdsUJ73dqowu8JCaQ4FTMGAewcqdtzs3T9Y.Cf7LtX6', '1647389062287_img.jpeg', NULL, '2022-03-16 00:04:22', '2022-03-16 00:04:22', NULL),
(2, 'Joaquin', 'joaquincaggiano@gmail.com', '$2a$10$RkePEl0IzVGCDXiHJMXav.odCQhHPGJOHkK7lqCgahjEmRPrrjGbO', '1647469836086_img.jpeg', NULL, '2022-03-16 22:30:36', '2022-03-16 22:30:36', NULL),
(3, 'Joaquin Serra', 'krilin@gmail.com', '$2a$10$Qb01ipC1Ny6mMD15rDqLsuTD2xTI2fVXQeYCSa9JyqscGQ0kUQAEK', '1647471827806_img.jpeg', NULL, '2022-03-16 23:03:47', '2022-03-16 23:03:47', NULL),
(4, 'Facu Mayuri', 'facumayuri@gmail.com', '$2a$10$t/KLwRHPnDi65IuKyF1CNOMJ4wzoinY4KGU0R1tsn3i1HlALqNwv2', '1647483135338_img.jpeg', NULL, '2022-03-17 02:12:15', '2022-03-17 02:12:15', NULL),
(5, 'juanki', 'juanki@gmail.com', '$2a$10$jHZR5ZgB06kd98bqoXn4aun.F5TFzGkWDWEPwWLR0u2R1b9RbKEsu', '1647483315921_img.jpeg', NULL, '2022-03-17 02:15:16', '2022-03-17 02:15:16', NULL),
(6, 'Tom caggiano', 'tomcaggiano@gmail.com', '$2a$10$8ygRqhF5yTeOc2ffkEHgX.47FyK23dp9yWuSNcU6SpSyDogO7yS/G', '1647886922356_img.jpeg', NULL, '2022-03-21 18:22:02', '2022-03-21 18:22:02', NULL),
(7, 'Juan Mu??oz', 'juanmunoz9393@gmail.com', '$2a$10$rO/NdhixR5924wtIRkDQnef2.pPyWgYpitIDVOcWuMjr6vJbUe3xO', '1647962024371_img.jpg', NULL, '2022-03-22 15:13:44', '2022-03-22 15:13:44', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productcart`
--
ALTER TABLE `productcart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `cartId` (`cartId`);

--
-- Indexes for table `productcategory`
--
ALTER TABLE `productcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `productcolor`
--
ALTER TABLE `productcolor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `colorId` (`colorId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brandId` (`brandId`);

--
-- Indexes for table `productsize`
--
ALTER TABLE `productsize`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `sizeId` (`sizeId`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `cartId` (`cartId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `productcart`
--
ALTER TABLE `productcart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productcategory`
--
ALTER TABLE `productcategory`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `productcolor`
--
ALTER TABLE `productcolor`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `productsize`
--
ALTER TABLE `productsize`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Constraints for table `productcart`
--
ALTER TABLE `productcart`
  ADD CONSTRAINT `productcart_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productcart_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`);

--
-- Constraints for table `productcategory`
--
ALTER TABLE `productcategory`
  ADD CONSTRAINT `productcategory_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productcategory_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Constraints for table `productcolor`
--
ALTER TABLE `productcolor`
  ADD CONSTRAINT `productcolor_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productcolor_ibfk_2` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`);

--
-- Constraints for table `productsize`
--
ALTER TABLE `productsize`
  ADD CONSTRAINT `productsize_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `productsize_ibfk_2` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `cartId` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;