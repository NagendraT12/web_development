function craeatemessage (name, callback){
    setTimeout(() => {
        const message = `hello ${name}`;
        callback(message);
    }, 2000);
    

}


function displymessg(message){
    console.log(message);

}

craeatemessage('nagendra',displymessg);
