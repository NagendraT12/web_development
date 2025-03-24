document.getElementById("asyncBtn").addEventListener("click", async function () {
    document.getElementById("asyncOutput").innerText = "Loading...";

    try {
        let response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) throw new Error("Network response error");
        
        let data = await response.json();
        document.getElementById("asyncOutput").innerHTML = data.posts.map(post => post.title).join("<br>");
    } catch (error) {
        document.getElementById("asyncOutput").innerText = "Error fetching data.";
    }
});
