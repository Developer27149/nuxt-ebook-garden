CREATE TABLE `books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`isbn10` text(10) DEFAULT '',
	`isbn13` text(13) DEFAULT '',
	`title` text(255) DEFAULT '',
	`url` text(255) DEFAULT '',
	`downloadUrls` text DEFAULT '[]',
	`images` text DEFAULT '{"small":"","large":"","medium":""}',
	`author` text DEFAULT '[]',
	`translator` text DEFAULT '[]',
	`rating` text DEFAULT '{"max":10,"numRaters":0,"average":0,"min":0}',
	`tags` text DEFAULT '[]',
	`similar_books` text DEFAULT '[]'
);
