CREATE TABLE `carddata` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`img` text NOT NULL,
	`date` varchar(255) NOT NULL,
	`location` varchar(255) NOT NULL,
	`time` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `carddata_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `event_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`event_id` int NOT NULL,
	`locale` varchar(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`details` text NOT NULL,
	CONSTRAINT `event_translations_id` PRIMARY KEY(`id`),
	CONSTRAINT `event_locale_unique` UNIQUE(`event_id`,`locale`)
);
--> statement-breakpoint
CREATE TABLE `events` (
	`id` int AUTO_INCREMENT NOT NULL,
	`img` text NOT NULL,
	`date` date NOT NULL,
	`location` varchar(255) NOT NULL,
	`time` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `popupdata` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`img` text NOT NULL,
	`link` text NOT NULL,
	CONSTRAINT `popupdata_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `testimonialdata` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`img` text NOT NULL,
	`position` varchar(255) NOT NULL,
	`text` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `testimonialdata_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password_hash` text NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
