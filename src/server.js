let express = require('express');
let app = express();


//Set static Folder
app.use(express.static(path.join(__dirname + '/dist')));


app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server started on port', port);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/demo/index.html'));
});
