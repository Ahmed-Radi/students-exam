const express = require('express');
const fs = require('fs');
const app = express()
const cors = require('cors')

const PORT = 4001
app.use(cors())

app.get('/', (err, res) => {
    fs.readFile("TestData.json", (fileErr, result) => {
        if(fileErr) throw fileErr;
        let jsonData = JSON.parse(result.toString());
        // const data = getRandom(jsonData)
        res.send(getRandom(jsonData));
    });
    function getRandom(jsonData, n = 10) {
        let arr = jsonData?.wordList;
        var result = new Array(n),
            len = arr?.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var item = Math.floor(Math.random() * len);
            result[n] = jsonData?.wordList[item in taken ? taken[item] : item];
            taken[item] = --len in taken ? taken[len] : len;
        }
        let verb = 0,
        adjective = 0,
        noun = 0,
        adverb= 0;
        result.map((r) => {
            if (r.pos === 'verb') {
                verb++;
                console.log(verb)
            } else if (r.pos === 'adjective') {
                adjective++;
                console.log(adjective)
            }
            else if (r.pos === 'noun') {
                noun++;
                console.log(noun)
            }
            else if (r.pos === 'adverb') {
                adverb++;
                console.log(adverb)
            }
        })
        if ( verb === 0 || adjective === 0 || noun === 0 || adverb === 0 ) {
            getRandom(jsonData, 10)
        }
        return result;
    }
});

app.post("/score/:score", (req, res) => {
    console.log(req.params.score)
})

app.listen(PORT, () => {
    console.log(`SERVER run on http://localhost:${PORT}`);
});