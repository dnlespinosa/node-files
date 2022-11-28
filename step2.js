const fs = require('fs')
const axios = require('axios')
const open = require('open')
let input = process.argv
let val = input[2];

async function webCat(url) {
    await axios.get(url)
    console.log(url)
}

function cat(path) {
    if (path == 'one.txt') {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading ${path}`, err)
                process.kill(1)
            }
            console.log(data)
        })
    }
    console.log(path)
}

cat(val);

