require('dotenv').config();
const { Pool, Client } = require('pg')

const LibPg = {
  getClient: function(){
    try{
      const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
      })
      client.connect();
      return client;      
    } catch (err) {
      console.log(err);
      throw new Error('Error, getClient');
    }
  },

}
module.exports = LibPg;
