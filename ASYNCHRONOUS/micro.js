console.log("Hello JavaScript");  // Synchronous task 1

setTimeout(() => {
    console.log("Course from Internshala");  // Asynchronous task (executes after 2 sec)
}, 2000);

fetch('https://dummyjson.com/products/1')  // Asynchronous task (fetch API request)
    .then(res => res.json())  // Convert response to JSON (Microtask Queue)
    .then(json => console.log(json));  // Log JSON response when fetched

console.log("Learning Asynchronous JavaScript");  // Synchronous task 2
