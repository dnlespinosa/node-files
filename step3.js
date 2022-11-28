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
    if (path =='--out') {
        fs.writeFile('.node-files/new.txt', 
            fs.readFile(input[3], 'utf8', (err, data) => {
                if(err) {
                    console.log(`ERROR`, err)
                }
                console.log(data)
            })    
        , 'utf8', function(err) {
            if(err) {
                console.log(err);
                process.exit(1)
            }
            console.log('writign your file')
        })
        
    }

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

cat(val)

