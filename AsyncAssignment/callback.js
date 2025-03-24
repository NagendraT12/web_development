document.getElementById("callbackBtn").addEventListener("click", function () {
    setTimeout(() => {
        document.getElementById("callbackOutput").innerText = "Callback executed after 5 seconds";
        
        // Fetching data from API after callback execution
        fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => {
                let posts = data.posts.map(post => post.title).join("<br>");
                document.getElementById("callbackOutput").innerHTML += "<br><br>" + posts;
            })
            .catch(error => document.getElementById("callbackOutput").innerText = "Error fetching data.");
    }, 5000);
});
