readDir();
const path = '/home/wandry/Documents';
const fs = require('fs');
const fileName = fs.readdirSync(path) 

function *readDir(){
    for (var i=0; i<fileName.length; i++) {
        yield fileName[i];
    }
}

const read = readDir();
let currentResult

for(var i = 0; i < fileName.length; i++) {
    currentResult = read.next()
    const result = currentResult.value
    console.log(result);
}
