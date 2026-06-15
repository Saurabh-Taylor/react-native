const fs = require('fs');

function fsPromisifiedVersion(filepath, encoding){
    return new Promise((resolve, reject) =>{
        fs.readFile(filepath, encoding, (err, contents)=>{
            if(err){
                reject(err)
            } else {
                resolve(contents)
            }
        })
    })
}


// fs.readFile("a.txt", "utf-8", callback)

fsPromisifiedVersion("a12.txt", "utf-8").then((data)=>{
    console.log("data", data);
    
})