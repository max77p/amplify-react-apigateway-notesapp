const express = require("express");
const app = express();
var bodyParser = require('body-parser');


app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes')(app);
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
//   })


app.listen(8080, () => console.log("Listening on port 8080!"));