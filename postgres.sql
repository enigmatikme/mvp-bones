DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

-- USE test;

-- CREATE SCHEMA random;



CREATE TABLE titles (
  "id" serial,
  "title" varchar(40)
  
);

CREATE TABLE distributors (
    id     integer PRIMARY KEY,
    name    varchar(40)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
