var express = require("express");

let app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// //twitter Api setup start
// var client = new Twitter({
//     consumer_key: "",
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     bearer_token: process.env.TWITTER_BEARER_TOKEN
//   });

// //twitter Api setup end



//ROUTE GET 
app.get('/abc', (req, res) =>{
    res.json({
      message : "Happpy",
      te:"AFjk"
    })
})

// start local server at 3000 PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log("server running");
});