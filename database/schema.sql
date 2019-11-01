DROP DATABASE IF EXISTS rpms65idvxlg2hrb;
CREATE DATABASE rpms65idvxlg2hrb;

USE rpms65idvxlg2hrb;

CREATE TABLE notes
(
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at DATETIME default NOW(),
    PRIMARY KEY(id)
);