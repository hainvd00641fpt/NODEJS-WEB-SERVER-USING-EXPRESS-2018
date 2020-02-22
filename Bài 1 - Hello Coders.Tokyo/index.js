const express = require('express')
const app = express();
const port = 3000;

app.get('/',  (request,response) => response.send('hello'));
 
app.listen(port, function(){
	console.log('Server listening on port' + port);
});
