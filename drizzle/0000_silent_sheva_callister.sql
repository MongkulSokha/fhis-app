CREATE TABLE `navbar` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`label` varchar(255) NOT NULL,
	`href` varchar(255),
	`parent_id` int,
	`order` int DEFAULT 0,
	`is_visible` boolean DEFAULT true,
	CONSTRAINT `navbar_id` PRIMARY KEY(`id`)
);
