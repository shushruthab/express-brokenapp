const express = require("express");
let app = express();

const {NotFoundError} = require('./expresserror');
const {getDeveloperData} = require('./helper');

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    console.log(req.body);
    developerinfo = await getDeveloperData(req.body.developers);
    return res.status(200).json(developerinfo);
  } catch (err) {
    return next(err);
  }
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  
  return res.status(status).json({
    error: { message, status },
  });
})

module.exports = app;
