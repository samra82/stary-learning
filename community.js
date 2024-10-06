// community.js
document.getElementById('communityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const userName = document.getElementById('userName').value;
    const userPost = document.getElementById('userPost').value;

    // Create a new post element
    const postDiv = document.createElement('div');
    postDiv.classList.add('post', 'mb-4');
    postDiv.innerHTML = `<h3 class="font-bold">${userName}</h3><p>${userPost}</p>`;

    // Append the new post to the posts container
    document.getElementById('posts').prepend(postDiv);

    // Reset the form
    document.getElementById('communityForm').reset();
});
