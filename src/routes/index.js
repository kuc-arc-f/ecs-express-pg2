const express = require('express');
const router = express.Router();
require('dotenv').config();

/* GET home page. */
router.get('/test', function(req , res) {
  try {
//console.log(process.env.POSTGRES_DATABASE);
    res.send({ name: "GET /test" });
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
