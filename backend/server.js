const express = require('express');
const app  = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Pros-Cons"
});

app.get('/', (req,res)=>{
  res.send('this is running with NODEMON');
});
app.listen(3001, () =>{
  console.log('active on port 3001');
});