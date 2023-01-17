const linksController = {}


//





linksController.makeFolder = async (req, res, next) => {
  // create a new folder in DB. 
    // generate Unique ID to use as URL
    // generate lable if none is provided
    // apply username if provided
    // apply parent folder ID if provided

  // save url + table ID in res.locals + userID if provided

  return next;
}

linksController.addLinks = async (req, res, next) => {
  // add all links in object with key as the lable field, and value as the url
  // add folderID from res.locals
  // add username if one is savd in res.locals

  return next;
}


linksController.getList = async (req, res, next) => {
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