const promisobject = fetch ('https://dummyjson.com/test');


promisobject.then(Response => Response.json()).then(Response=>console.log(Response));

promisobject.catch(err => console.log(err));