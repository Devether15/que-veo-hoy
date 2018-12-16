CREATE TABLE `actor_pelicula` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `actor_id` int(12) NOT NULL,
  `pelicula_id` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (actor_id) REFERENCES `actor` (`id`),
  FOREIGN KEY (pelicula_id) REFERENCES `pelicula` (`id`)

);