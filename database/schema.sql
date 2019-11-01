DROP DATABASE IF EXISTS note_db;
CREATE DATABASE note_db;

USE note_db;

CREATE TABLE notes
(
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at DATETIME default NOW(),
    PRIMARY KEY(id)
);