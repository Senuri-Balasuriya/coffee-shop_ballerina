-- AUTO-GENERATED FILE.

-- This file is an auto-generated file by Ballerina persistence layer for model.
-- Please verify the generated scripts and execute them against the target DB server.

DROP TABLE IF EXISTS [ProductSize];
DROP TABLE IF EXISTS [Order];
DROP TABLE IF EXISTS [Customer];
DROP TABLE IF EXISTS [OrderItem];
DROP TABLE IF EXISTS [Product];
DROP TABLE IF EXISTS [CartItem];
DROP TABLE IF EXISTS [Provider];

CREATE TABLE [Provider] (
	[id] INT NOT NULL,
	[name] VARCHAR(191) NOT NULL,
	[email] VARCHAR(191) NOT NULL,
	[password] VARCHAR(191) NOT NULL,
	[shopName] VARCHAR(191) NOT NULL,
	PRIMARY KEY([id])
);

CREATE TABLE [CartItem] (
	[id] INT NOT NULL,
	[customerId] INT NOT NULL,
	[productId] INT NOT NULL,
	[productSizeId] INT,
	[quantity] INT NOT NULL,
	PRIMARY KEY([id],[customerId])
);

CREATE TABLE [Product] (
	[id] INT NOT NULL,
	[name] VARCHAR(191) NOT NULL,
	[description] VARCHAR(191) NOT NULL,
	[price] FLOAT NOT NULL,
	[providerId] INT NOT NULL,
	PRIMARY KEY([id],[providerId])
);

CREATE TABLE [OrderItem] (
	[id] INT NOT NULL,
	[orderId] INT NOT NULL,
	[productId] INT NOT NULL,
	[productSizeId] INT,
	[quantity] INT NOT NULL,
	[price] FLOAT NOT NULL,
	PRIMARY KEY([id],[orderId])
);

CREATE TABLE [Customer] (
	[id] INT NOT NULL,
	[name] VARCHAR(191) NOT NULL,
	[email] VARCHAR(191) NOT NULL,
	[password] VARCHAR(191) NOT NULL,
	[role] VARCHAR(191) NOT NULL,
	PRIMARY KEY([id])
);

CREATE TABLE [Order] (
	[id] INT NOT NULL,
	[customerId] INT NOT NULL,
	[status] VARCHAR(191) NOT NULL,
	[orderDate] VARCHAR(191) NOT NULL,
	PRIMARY KEY([id],[customerId])
);

CREATE TABLE [ProductSize] (
	[id] INT NOT NULL,
	[name] VARCHAR(191) NOT NULL,
	[price] FLOAT NOT NULL,
	[productId] INT NOT NULL,
	PRIMARY KEY([id],[productId])
);


