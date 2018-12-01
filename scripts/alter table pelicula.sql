ALTER TABLE pelicula ADD column genero_id INT (11) NOT NULL;

ALTER TABLE pelicula ADD FOREIGN KEY (genero_id) REFERENCES genero(id);