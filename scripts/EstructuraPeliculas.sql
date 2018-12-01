CREATE DATABASE peliculas;

USE peliculas;

CREATE TABLE `pelicula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `anio` INTEGER(5) DEFAULT NULL,
  `duracion` INTEGER(5) NOT NULL,
  `director` VARCHAR(400) NOT NULL,
  `fecha_lanzamiento` DATE NOT NULL,
  `puntuacion` INTEGER(2) NOT NULL,
  `poster` VARCHAR(300) NOT NULL,
  `trama` VARCHAR(700) NOT NULL,
  PRIMARY KEY (`id`)
); 
