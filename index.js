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

// Catch-all route (should be last)  use one this is tested and worked for all
app.use(/.*/, (req, res) => {
    res.status(404).send("There is no path matched.");
});

(or)
app.use((req, res) => {
    res.status(404).send("There is no path matched.");
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
app.get('/search', (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("<h1>Nothing Searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});


/*    order wise searched for chatgpt

  const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});

// GET Root
app.get("/", (req, res) => {
    res.send("You are on the root path");
});

// GET /apple
app.get("/apple", (req, res) => {
    res.send("You contacted the apple path");
});

// GET /orange
app.get("/orange", (req, res) => {
    res.send("You contacted the orange path");
});

// GET with path parameters
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

// GET with query string
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        return res.send("<h1>Nothing Searched</h1>");
    }
    res.send(`<h1>Search results for query: ${q}</h1>`);
});

// POST root
app.post("/", (req, res) => {
    res.send("You sent a POST request to root");
});

// Catch-all route (should be last)  use one thios is tested and worked for all
app.use(/.*/, (req, res) => {
    res.status(404).send("There is no path matched.");
});

app.use((req, res) => {
    res.status(404).send("There is no path matched.");
});

// Middleware after routing
app.use((req, res) => {
    console.log("Request accepted!");
    res.send({
        name: "apple",
        color: "red"
    });
});

*/