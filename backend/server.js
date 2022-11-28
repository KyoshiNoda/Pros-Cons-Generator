const express = require('express');
const app  = express();


app.get('/', (req,res)=>{
  res.send('This is running on port 3001');
});
app.listen(3001, () =>{
  console.log('active on port 3001');
});