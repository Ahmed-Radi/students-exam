const express = require('express');
const fs = require('fs');
const app = express()
const cors = require('cors')

const PORT = 4001
app.use(cors())

app.get('/', (err, res) => {
    fs.readFile("TestData.json", (fileErr, result) => {
        if(fileErr) throw fileErr;
        var jsonData = JSON.parse(result.toString());
        res.send(jsonData);
    });
});

app.post("/score", (req, res) => {
    // req.body.score
})

app.listen(PORT, () => {
    console.log(`SERVER run on http://localhost:${PORT}`);
});