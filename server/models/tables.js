const db = require('./database.js');

const userTable = `
	CREATE TABLE users (
		username varchar(255) NOT NULL UNIQUE,
		password varchar(255) NOT NULL,
		email varchar(255) NOT NULL UNIQUE,
		PRIMARY KEY (username)
		);
	`;

const createMockDataUser = `
	INSERT INTO users (username, password, email)
 	VALUES ('admin', 'password', 'admin@gmail.com');
	`;

const linkTable = `
	CREATE TABLE links (
		id int NOT NULL GENERATED ALWAYS AS IDENTITY,
		link varchar(255) NOT NULL,
		label varchar(255) NOT NULL,
		folder int NOT NULL,
		key varchar(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY (id)
		);
	`;

const createMockDataLinks = `
	INSERT INTO links (link, label, folder)
 	VALUES ('www.google.com', 'google', 1);
	`;


const folderTable = `
  CREATE TABLE folders (
    id int NOT NULL GENERATED ALWAYS AS IDENTITY,
    label varchar(255) NOT NULL,
		url varchar(255) NOT NULL,
    parent int,
    username varchar(255),
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );
  `

const createMockDataFolder = `
	INSERT INTO folders (label, url)
 	VALUES ('coolstuff', 'xy29o');
	`;

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

/* USE THIS TO CREATE INITIAL TABLES */
// setupTables([userTable, linkTable, folderTable]);
// setupTales([linkTable, folderTable]);

const creatMockData = (mockData) => {
  mockData.forEach(d => {
    db.query(d)
    .then(data => {
      console.log(`table: ${JSON.stringify(d)} mock-data complete`);
      console.log(data)
    })
    .catch(err => {
      console.log('errr adding mock data to table');
      console.log(err)
    });
  });
}


/* USE THIS TO CREATE MOCK DATA */
// creatMockData([createMockDataUser, createMockDataLinks, createMockDataFolder]);
// creatMockData([createMockDataLinks, createMockDataFolder]);


const eraseTables = (tablename) => {
  const dropQuery = `DROP TABLE ${tablename}`;
  db.query(dropQuery)
    .then(data => {
      console.log(`sucessfully deleted: ${tablename}`);
      console.log(data)
    })
    .catch(err => {
      console.log('errr deleting table' + tablename);
      console.log(err)
    });
}

/* USE THESE TO ERASE TABLES */
// eraseTables('folders');
// eraseTables('links');
// eraseTables('users');

const selectQuery= `
	SELECT * FROM users;
	`;

// RUN:
// node ./server/models/tables.js    