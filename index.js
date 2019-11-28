var express = require("express");

let app = express();


//ROUTE GET 
app.get('/', (req, res) =>{
    res.send('Home Route WOrking')
})

// start local server at 3000 PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server running");
});