const { create } = require('domain');
const express = require('express');
const { read } = require('fs');
const app = express();
const path = require('path');
const hbs = require('hbs');
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates');
// to set the view engin
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// template engine route

app.get("", (req, res) => {
    res.render('index');
})

// app.use(express.static(staticPath));

// API
// get - read
// post - create
// put - update
// delete - delete

// app.get(route, callback)



// app.get('/', (req, res) => {
//     res.send("<h1>hello from the Express.js and home</h1>");
// });

// giving the html data 
// app.get('/about', (req, res) => {
//     res.send("hello from the about");
// });

// giving the json data 
// app.get('/json', (req, res) => {
//     res.send({
//         id: 1,
//         name: 'ayush',
//     });
// });

// app.get("*", (req, res) => {
//     res.render("error", {
//         varr: "Opps page couldn't be found",
//     });
// });



app.listen(8000, () => {
    console.log("listing the port");
});


// console.log(path.join(__dirname, '../public'));

// The callback function has 2 parameters, request(req) and response(res).
// The request object(req) represents the HTTP request and
// has properties for the request query string, parameters, body,
// HTTP headers, etc.
// Similarly, the response object represents the HTTP response
// that the Express app sends when it receives an HTTP request.