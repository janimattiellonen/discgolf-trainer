CREATE TABLE training_entry (
  `id` int unsigned AUTO_INCREMENT NOT NULL,
  `duration` INT(10) UNSIGNED DEFAULT 0,
  `precision` DECIMAL(10, 2) UNSIGNED NOT NULL,
  `feeling` TINYINT(10) UNSIGNED DEFAULT 0,
  `practise_id` INT(10) UNSIGNED NOT NULL,
  `practise_type_id` INT(10) UNSIGNED NOT NULL,
  `runup_id` INT(10) UNSIGNED NOT NULL,
  `comments` TEXT DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;
