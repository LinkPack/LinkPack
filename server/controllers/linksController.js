const db = require('../models/database');
const UIDGenerator = require('uid-generator');


const linksController = {}



linksController.makeFolder = async (req, res, next) => {
  // we manually set this to 32, but in order to scale we may want to increase this, or have it scale based on number of links in DB.
  const uidgen = new UIDGenerator(32);

  try {
    // generate UID
    let uid = await uidgen.generate();

    // check if folder exists. If it does... keep making uids and checking, up to 10 tries
    try {
      let dupID = true;
      let maxTries = 10;
      while (dupID) {
        const checkQuery = `SELECT COUNT(*) FROM folders WHERE url = '${uid}';`;
        const checkIfFolderExists = await db.query(checkQuery);
        if (Number(checkIfFolderExists.rows[0].count) > 0) {
          console.log('dup found')
          uid = await uidgen.generate();
          maxTries--;
        }
        else {
          console.log('no dup found, continuing')
          dupID = false;
        }
        if (maxTries <= 0) throw new Error('max tries to find UUID exceeded');
      }
    }
    catch (error) {
      return next({
        log: 'error in linksController.makeFolder',
        status: 400,
        message: {err: error}
      })
    }

    // values that will go into table
    const folderName = req.body.folderName ? req.body.folderName : '';
    const username = req.body.username ? req.body.username : null;
    const parent = req.body.parentFolder ? req.body.parentFolder : null;

    // insert folder and uid in DB + other data
    const query = `
      INSERT INTO folders (label, url, parent, username)
      VALUES ( $1, $2, $3, $4 )
      RETURNING id;
    `;
    const params = [
      folderName, uid, parent, username
    ]

    // adds to db and returns the new ID
    const results = await db.query(query, params);

    res.locals.folderId = results.rows[0].id;
    res.locals.url = uid;

    // what we are passing along
    console.log('locals', res.locals);

    return next();
  }
  catch (error) {
    return next({
      log: 'error in linksController.makeFolder',
      status: 400,
      message: {err: error}
    })
  }


  // create a new folder in DB. 
    // generate Unique ID to use as URL
    // generate lable if none is provided
    // apply username if provided
    // apply parent folder ID if provided

  // save url + table ID in res.locals + userID if provided
}

linksController.addLinks = async (req, res, next) => {
  const links = req.body;
  console.log('links',links);

  try {

    let query = `INSERT INTO links (link, label, folder)
      VALUES`;
    let params = [];

    for (let i = 0; i < links.length; i++) {
      let num = i * 3;
      // add to query
      query += `( $${num + 1}, $${num + 2}, $${num + 3} )`;
      if (i < links.length -1) query += `,`

      // push values
      params.push(links[i].link);
      params.push(links[i].label);
      params.push(res.locals.folderId);
    }
    query += `;`;

    console.log('query:', query);
    console.log('params:',params);

    // adds to db and returns the new ID
    const results = await db.query(query, params);

    return next();
  }
  catch (error) {
    return next({
      log: 'error in linksController.addLinks',
      status: 400,
      message: {err: error}
    })
  }


  // add all links in object with key as the lable field, and value as the url
  // add folderID from res.locals
  // add username if one is savd in res.locals

}


linksController.getList = async (req, res, next) => {
  try {
    // console.log('req.params.id', req.params.id);
    // step 1: using the tiny url, find the associated folder number
    
    const findFolderQuery = `
      SELECT id
      FROM folders
      WHERE url = '${req.params.id}';
    `
    const folderData = await db.query(findFolderQuery);
    const folderNumber = folderData.rows[0].id;
    // step 2: using the folder number, return all links associate with the folder number
    const fetchLinksQuery = `
      SELECT label, link
      FROM links
      WHERE folder = ${folderNumber}
    `
    const linksData = await db.query(fetchLinksQuery);
    const linksAndLabels = {};
    const fetchedLinksObj = linksData.rows.forEach((obj) => {
      linksAndLabels[obj['label']] = obj['link'];
    });

    // save fetched links to res.local to send to client
    res.locals.fetchedLinks = linksAndLabels;
    return next()
  } catch (err) {
    return next({
      log: 'linksController.getList failure',
      status: 400,
      message: {err:`linksController.getList fail ${err}`}
    });
  }
  
  // ID = the 
  // send an id to look up in DB
  // ID will match with a folder
  // jointable getting all contents (links + folders) with that folder ID
  // generate an object with lables+links

  // try {
  //  // make suer
  // }
  // catch (err) {
  //   return next({
  //     log: 'userController.createUser failure',
  //     status: 400,
  //     message: {err:`userController.createUser fail ${err}`}
  //   });
  // };
}


module.exports = linksController;