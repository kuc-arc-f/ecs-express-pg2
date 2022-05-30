const express = require('express');
const router = express.Router();
require('dotenv').config();

const LibTask = require('../lib/LibTask');

/*****************************
index
*****************************/
router.get('/index',async function(req , res) {
  try {
    const items = await LibTask.getItems();
//console.log(items);
    res.json(items);    
//console.log(process.env.POSTGRES_DATABASE);
  } catch (error) {
    res.sendStatus(500);
  }
});
/******************************** 
*  todos Show
*********************************/
router.get('/show/:id', async function(req, res) {
  try {
    console.log(req.params.id  );
    const result = await LibTask.getItem(Number(req.params.id));
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});
/*****************************
add
*****************************/
router.post('/add', async function(req, res) {
  try {
    const result = await LibTask.addTask(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
Task -update
******************************/
router.post('/update', async function(req, res) {
  try {
    const result = await LibTask.updateTask(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
Task -delete
******************************/
router.post('/delete', async function(req, res) {
  try {
    const result = await LibTask.deleteTask(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
