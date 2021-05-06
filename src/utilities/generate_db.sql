DROP DATABASE IF EXISTS DBChirperDemo;
CREATE DATABASE DBChirperDemo;
USE DBChirperDemo;

DROP USER 'db_chirper_demo_admin'@'localhost';
CREATE USER 'db_chirper_demo_admin'@'localhost' IDENTIFIED BY 'hunter2';
GRANT ALL PRIVILEGES ON DBChirperDemo.* TO 'db_chirper_demo_admin'@'localhost';
FLUSH PRIVILEGES;


DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
	id VARCHAR(40) NOT NULL PRIMARY KEY,
    username VARCHAR(32) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO Users (id, username) VALUES ('234jkhf978dy34ew8u', 'atlc'), ('jk23hjk23ujk789789723', 'luna');
SELECT * FROM Users;



DROP TABLE IF EXISTS Chirps;
CREATE TABLE Chirps (
	id VARCHAR(40) NOT NULL PRIMARY KEY,
    user_id VARCHAR(40),
    content VARCHAR(280),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
INSERT INTO Chirps (id, user_id, content) VALUES ('zzzzzzzzzzzzz', '234jkhf978dy34ew8u', "lol hey what's up"), ('zzsdfsdsdfsd', 'jk23hjk23ujk789789723', 'hisssssss');
