javascript
CopyEdit
const firstObject = fetch("https://dummyjson.com/products/1").then(response => response.json());
const secondObject = fetch("https://dummyjson.com/users/1").then(response => response.json());
const thirdObject = fetch("https://dummyjson.com/posts/1").then(response => response.json());

Promise.all([firstObject, secondObject, thirdObject])
    .then(results => {
        console.log("All promises resolved successfully:", results);
    })
    .catch(error => {
        console.log("One or more promises failed:", error);
    });
