const express = require('express');
const router = express.Router();
require('dotenv').config();
const LibPg = require('./LibPg');

const LibTask = {
  /*****************************
  getItems
  ******************************/    
  getItems :async function(){
    try {
      const text = `
       SELECT * FROM public."Task" ORDER BY id DESC LIMIT 100
      `;
      const client = LibPg.getClient();
      const res = await client.query(text);
      client.end();
//console.log(res.rows);
      return res.rows;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems:' +err);
    }          
  },
  /*****************************
  getItem
  ******************************/  
  getItem :async function(id){
    try {
      const text = `
      SELECT * FROM public."Task" where id = ${id}
      `;
      const client = LibPg.getClient();
      const res = await client.query(text);
      client.end();
      const data = res.rows[0];
  //      console.log(data);
      return data;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem:' +err);
    }    
  },
  /*****************************
  addTask
  ******************************/  
  addTask :async function(req){
    try {
//console.log(LibConfig.OK_CODE);
console.log(req.body);
      const body = req.body;
      const text = `
      INSERT INTO public."Task" (title, content, "userId", "createdAt", "updatedAt") 
      VALUES($1, $2, 0, current_timestamp, current_timestamp) RETURNING *
      `;      
      const values = [body.title, body.content ]
//console.log(text);
      const client = LibPg.getClient();
      const res = await client.query(text, values);
      client.end();
      const result = res.rows[0];
console.log(result);
      return {
        ret: 'OK', data: result 
      };
    } catch (err) {
      console.error(err);
      throw new Error('Error , addTask: '+ err);
    }    
  }, 
  /*****************************
  updateTask
  ******************************/     
  updateTask :async function(req){
    try {
      //console.log(LibConfig.OK_CODE);
      console.log(req.body);
      const body = req.body;
      const text = `
      UPDATE public."Task" set title = $1,
      content = $2 ,
      "updatedAt" = current_timestamp
      where id= $3
      RETURNING *
      `;
      const values = [body.title, body.content, body.id ]
      const client = LibPg.getClient();
      const res = await client.query(text, values);
      client.end();
      const result = res.rows[0];
console.log(result);
      return {
        ret: 'OK', data: result 
      };
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateTask: '+ err);
    }    
  }, 
  /*****************************
  deleteTask
  ******************************/   
  deleteTask :async function(req){
    try {
      //console.log(LibConfig.OK_CODE);
      console.log(req.body);
      const body = req.body;
      const text = `
      delete FROM public."Task" where id=  $1
      RETURNING *
      `;
      const values = [body.id ]
      const client = LibPg.getClient();
      const res = await client.query(text, values);
      client.end();
      const result = res.rows[0];
//console.log(result);
      return {
        ret: 'OK', data: body 
      };
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteTask: '+ err);
    }    
  },

} 
module.exports = LibTask;
