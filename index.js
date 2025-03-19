const express = require("express");
const app = express();

// console.log(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app listening at port ${port}`);
});

app.use((req,res)=>{
    console.log("reques accepted!");
    res.send({
        name: "apple",
        color: "red" 
    });
   let code = "<h1>Cars</h1> <ul><li>Mustang</li><li>Charger</li><li>Supra</li></ul>";
    res.send(code);
});

//routing
app.get("/",(req,res)=>{
    res.send("you are on a root path");
});

app.get("/apple", (req, res) => {
    res.send("you contected apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contected orange path");
});

app.get("*", (req, res) => {
    res.send("this path does not exist");
});

app.post("/", (req, res) => {
    res.send("you send a post request to root");
});



//path parameters

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcome to the @${username}`);
});


app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});
 

// Query Selector  like google search
aapp.get('/search', (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("<h1>Nothing Searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});