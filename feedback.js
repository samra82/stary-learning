// feed.js
document.getElementById('feedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;

    // You can add your logic here to handle the post (e.g., send to a server, display on the page, etc.)
    console.log("Post Title:", postTitle);
    console.log("Post Content:", postContent);

    // Optionally, reset the form
    document.getElementById('feedForm').reset();
});
