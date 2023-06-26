-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26/06/2023 às 07:09
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `barbeasy`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `barbearia`
--

CREATE TABLE `barbearia` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `funcionario` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `cortes` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `setenhalf` varchar(255) DEFAULT NULL,
  `oitohalf` varchar(255) DEFAULT NULL,
  `novehalf` varchar(255) DEFAULT NULL,
  `dezhalf` varchar(255) DEFAULT NULL,
  `onzehalf` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `barbearia`
--

INSERT INTO `barbearia` (`id`, `name`, `password`, `email`, `funcionario`, `endereco`, `cortes`, `img`, `setenhalf`, `oitohalf`, `novehalf`, `dezhalf`, `onzehalf`, `createdAt`, `updatedAt`) VALUES
(1, 'Pub Barbearia Blinders', '1', 'jose@gmai.com', 'josé', 'rua tal, bairro tal', 'degradê', NULL, NULL, NULL, NULL, NULL, NULL, '2023-06-23 04:30:10', '2023-06-23 04:30:10'),
(4, 'Silas sousa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-06-26 03:06:40', '2023-06-26 03:06:40');

-- --------------------------------------------------------

--
-- Estrutura para tabela `horarios`
--

CREATE TABLE `horarios` (
  `id` int(11) NOT NULL,
  `horario` varchar(255) DEFAULT NULL,
  `servicoId` int(11) DEFAULT NULL,
  `barbeariaId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `horarios`
--

INSERT INTO `horarios` (`id`, `horario`, `servicoId`, `barbeariaId`, `userId`, `createdAt`, `updatedAt`) VALUES
(12, '11:00', NULL, 1, NULL, '2023-06-26 04:55:52', '2023-06-26 04:55:52'),
(13, '09:00', NULL, 1, NULL, '2023-06-26 04:56:16', '2023-06-26 04:56:16'),
(14, '14:00', NULL, 1, NULL, '2023-06-26 04:57:34', '2023-06-26 04:57:34'),
(15, '10:00', NULL, 1, NULL, '2023-06-26 05:07:41', '2023-06-26 05:07:41'),
(16, '08:00', NULL, 4, NULL, '2023-06-26 05:07:52', '2023-06-26 05:07:52');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230612004325-create-users.js'),
('20230620000417-create-barbearia.js'),
('20230623012712-create-servico.js'),
('20230623013300-create-horarios.js'),
('20230623022928-create-barbearia.js'),
('20230623033853-create-horarios.js'),
('20230623221830-create-servico.js'),
('20230623221859-create-horario.js'),
('20230626001151-create-horario.js');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
(9, 'Barbearia Corte Certo', '123', 'joao', '2023-06-12 02:39:49', '2023-06-12 02:39:49'),
(10, 'Pub Barbearia Oliver', 'irjdbxb', 'Ndndjjdhh', '2023-06-12 02:43:38', '2023-06-12 02:43:38'),
(11, 'Salão beleza Pura', 'irjdbxb', 'Ndndjjdhhnn', '2023-06-12 02:45:26', '2023-06-12 02:45:26'),
(18, '1', '1', '1', '2023-06-23 01:00:06', '2023-06-23 01:00:06');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `barbearia`
--
ALTER TABLE `barbearia`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `barbearia`
--
ALTER TABLE `barbearia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
