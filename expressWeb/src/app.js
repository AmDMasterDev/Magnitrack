const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.use(express.static(path.join(__dirname, "../public")))

app.get("", (req, res) => {
    res.send("hello world!")
})

app.listen(port, () => {
    console.log("listening on port " + port)
})