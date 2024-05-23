CREATE TABLE `books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`isbn10` text(10),
	`isbn13` text(13),
	`title` text(255),
	`origin_title` text(255) DEFAULT '',
	`alt_title` text(255) DEFAULT '',
	`subtitle` text(255) DEFAULT '',
	`url` text(255) DEFAULT '',
	`alt` text(255) DEFAULT '',
	`image` text(255) DEFAULT '',
	`images` text DEFAULT '{}',
	`author` text DEFAULT '[]',
	`translator` text DEFAULT '[]',
	`publisher` text(255),
	`pubdate` text(10),
	`rating` text DEFAULT '{"max":10,"numRaters":0,"average":0,"min":0}',
	`tags` text DEFAULT '[]',
	`binding` text(255) DEFAULT '',
	`price` text(255) DEFAULT '',
	`series` text,
	`pages` text(255) DEFAULT '',
	`author_intro` text DEFAULT '',
	`summary` text DEFAULT '',
	`catalog` text DEFAULT '',
	`ebook_url` text(255) DEFAULT '',
	`ebook_price` text(255) DEFAULT ''
);
