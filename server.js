console.log("App starting")
var express = require('express');
console.log("Express required")
var app = express();
console.log("var app initiated")
app.get('/', function(req, res){
    console.log("getting /")
    var jsonHeader=req.headers
    var ip = jsonHeader["x-forwarded-for"]
    var language = jsonHeader["accept-language"]
    var software = jsonHeader["user-agent"]
    var software = software.split("(")[1].split(")")[0]
    res.type('application/json');
    var jsonRes={"ipaddress" : ip, "language" : language, "software" : software}
    res.json(jsonRes);
    console.log("repsonse sent")
});

app.listen(process.env.PORT || 5000)
