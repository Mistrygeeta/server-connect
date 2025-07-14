const express = require("express");

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.render('home',{title: 'Home Page'});
})


app.get('/about', (req, res)=>{
    res.render('about',{title:'About page'});
});

app.get('/contact', (req, res)=>{
    res.render('contact',{title:'Contact Page'})
});

app.all('/*splat', (req,res)=>{
    res.status(404).send("pageNotFound")
})
app.listen(3000, ()=>{
    console.log("server is running in 3000")
})