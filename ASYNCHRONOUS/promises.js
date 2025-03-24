const promise = new Promise (function(resolve, reject) {


    let promiseResult;

    setTimeout(()=>{

        promiseResult = 0;

        if(promiseResult){
            resolve("succcsus");
        }else{
            reject("noooooooooooo");
        }
    },1000);

});


promise.then(result=>console.log(result));
promise.catch(err=>console.log(err));


console.log("hiiii");


