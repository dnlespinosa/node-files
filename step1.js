const fs = require('fs')
let file = 'one.txt'

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}`, err)
            process.kill(1)
        }
        console.log(data)
    })
}

cat(file);