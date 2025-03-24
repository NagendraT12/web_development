document.getElementById("promiseBtn").addEventListener("click", function () {
    document.getElementById("promiseOutput").innerText = "Loading...";

    let fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then(response => response.json())
                .then(data => resolve(data.posts.map(post => post.title).join("<br>")))
                .catch(error => reject("Error fetching data"));
        }, 2000);
    });

    fetchData
        .then(result => document.getElementById("promiseOutput").innerHTML = result)
        .catch(error => document.getElementById("promiseOutput").innerText = error);

    setTimeout(() => {
        fetchData.catch(() => document.getElementById("promiseOutput").innerText = "Operation timed out.");
    }, 5000);
});
