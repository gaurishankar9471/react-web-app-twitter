var express = require("express");

let app = express();


//twitter Api setup start
var client = new Twitter({
    consumer_key: "",
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

//twitter Api setup end



//ROUTE GET 
app.get('/', (req, res) =>{
    res.send('Home Route WOrking')
})

// start local server at 3000 PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server running");
});