// import Express framework
const express = require('express');

// Create App

const app = express();

app.use(express.static(__dirname + '/public'));

// Create routes for different pages
    // Home Page
app.get('/home', (req, res)=>{
    res.sendFile(__dirname+"/views/home.html");
})

    // About Page
app.get('/about', (req, res)=>{
    res.sendFile(__dirname+"/views/about.html");
})
    // Works Page 
app.get('/works', (req, res)=>{
    res.sendFile(__dirname+"/views/works.html");
})

// Start server
app.listen(3000, ()=>{console.log("Server running on PORT 3000")});
