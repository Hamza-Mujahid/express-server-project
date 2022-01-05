// const express = require('express');
// const app = express();
// const path = require('path');
// const indexfile = path.join(__dirname, "./", "views", "index.html");
// const users = require('./data').userDB;
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: false}));
// // app.use(express.static(path.join(__dirname,'./public')));

// app.get('/', (req, res) => {
//     res.send(indexfile)
// })
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(req.url);
    next()
});
app.use("/")

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, './', 'views', 'index.html'))
})

app.post("/home", (req, res) => {
    res.send(JSON.stringify("welcome " + req.body.userName + " Your password is " + req.body.password))
})


app.listen(3000);


// https://codex.so/handling-any-post-data-in-express