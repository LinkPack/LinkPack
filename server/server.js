const path = require('path');
const express = require('express');

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
