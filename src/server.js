const express = require('express');
const path = require('path');
const app = express();


//Set static Folder
app.use(express.static(path.join(__dirname + '/dist/demo')));

//Index routing
app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname + '/dist/demo/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server started on port', port);
});
