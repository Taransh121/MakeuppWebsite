const http=require("http");
const fs=require("fs");
const home=fs.readFileSync("index.html");
const about=fs.readFileSync("about.html");
const products=fs.readFileSync("products.html");
const contact=fs.readFileSync("contact.html");
const hostname="127.0.0.1";
const port="800";

//SUBMITING HTML FORM- (NOT WORKING)
// const express=require("express");
// // const { urlencoded } = require("body-parser");
// const app=express();

// app.use(express.urlencoded())

// app.post("/contact",(req,res)=>{
//     Name=req.body.Name;
//     Email=req.body.Email;
//     Number=req.body.Number;

//     let output=`The name of the person is ${Name} , his email is ${Email} and his phone number is ${Number}.`

//     fs.writeFileSync("output.txt",output)

//     res.render("contact.html")
// });
// app.listen(port,()=>{
//     console.log("App started sucessfully.");
// })

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    url=req.url;
    res.writeHead(200,{"content-type":"text/html"});
    if (url=="/home")
    {
        res.end(home);
    }
    else if(url=="/about")
    {
        res.end(about)
    }
    else if(url=="/products")
    {
        res.end(products)
    }
    else if(url=="/contact")
    {
        res.end(contact)
    }
    else
    {
        res.statusCode=404;
        res.end("<h1>Error , not found</h1>")
    } 
});
server.listen(port,hostname,()=>{
    console.log(`Loading server at http://${hostname}:${port}/home`)
})


