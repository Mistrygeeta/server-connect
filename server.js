const express = require("express");
const expressLayouts = require("express-ejs-layouts")

const app = express();

app.use(expressLayouts);

app.set('view engine', 'ejs')


app.set("layout", "layout")

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