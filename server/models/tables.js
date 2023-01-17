const db = require('./database.js');

const userTable = `
	CREATE TABLE users (
		username varchar(255) NOT NULL UNIQUE,
		password varchar(255) NOT NULL,
		email varchar(255) NOT NULL UNIQUE,
		PRIMARY KEY (username)
		);
	`;

const linkTable = `
	CREATE TABLE links (
		id int NOT NULL GENERATED ALWAYS AS IDENTITY,
		link varchar(255) NOT NULL,
		label varchar(255) NOT NULL,
		user_id varchar(255),
		folder int NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY (id)
		);
	`;


const folderTable = `
  CREATE TABLE folders (
    id int NOT NULL GENERATED ALWAYS AS IDENTITY,
    label varchar(255) NOT NULL,
		url varchar(255) NOT NULL,
    parent int,
    user_id varchar(255),
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );
  `

  const setupTables = (tables) => {


    tables.forEach(table => {
      db.query(table)
      .then(data => {
        console.log(`table: ${JSON.stringify(table)} setup complete`);
        console.log(data)
      })
      .catch(err => {
        console.log('errr setting up table');
        console.log(err)
      });
    });
    
  }

setupTables([userTable, linkTable, folderTable]);

const testInsertUserQuery = `
	INSERT INTO users (username, password, email)
 	VALUES ('admin', 'password', 'admin@gmail.com');
	`;


const selectQuery= `
	SELECT * FROM users;
	`;

/*
db.query(testInsertUserQuery)
	.then(data => console.log(data))
	.catch(err => console.log(err))

// db.query(selectQuery)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

db
  .query('SELECT * FROM users')
  .then((res) => console.log('user:', res.rows[0]))

  */