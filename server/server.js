"use strict";
const path = require('path');
const express = require('express');
const linksController = require('./controllers/linksController');
const app = express();
// router
// const apiRouter = require('./routes/api');
const PORT = 3000;
// needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static files
app.use(express.static(path.resolve(__dirname, '../client')));
// handle routes
// app.use('/api', apiRouter);
// generate an aggregate link
app.post('/genlink', linksController.makeFolder, linksController.addLinks, (req, res) => {
    // recieve:
    // object with two keys
    // links : array of links
    // labels : array of matching labels
    // only do this if a username + folder name to end is provided: (i.e. a user is logged in)
    // check if folder exists, if not, make folder
    // else: just make a folder.
    // save folder ID + folder url in res.locals
    // add all links + lables to link table w/ ref to the new folder.
    // reply with folder URL
    // MIDDLEWARE
    // create a folder 
    // add links
    console.log('/genlink');
    return res.status(200).json({ link: res.locals.url });
});
// generate an aggregate link
app.get('/getList/:id', linksController.getList, (req, res) => {
    console.log(res.locals.fetchedLinks);
    return res.status(200).json(res.locals.fetchedLinks);
});
// app.post('/signup', userController.createUser, sessionController.setSSIDCookie, sessionController.startSession, userController.checkServed, (req, res)=>{
//   console.log('successfully created user: ', req.body.username, ' user served:', res.locals.served );
//   return res.status(200).json({message: 'signup success', served: res.locals.served, userID: res.locals.userID});
// })
app.get('/*', (req, res) => {
    console.log('in catch all');
    return res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});
// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('404 error. Page not found'));
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
// connect to port
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
module.exports = app;
//# sourceMappingURL=server.js.map