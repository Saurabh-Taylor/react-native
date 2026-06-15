

function promisifiedSetTimeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
function callback() {
    console.log("saurabh");
    
}

// setTimeout(callback,  2000);
promisifiedSetTimeout(3000).then(callback)
