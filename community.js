document.getElementById('communityForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const userName = document.getElementById('userName').value;
    const userPost = document.getElementById('userPost').value;
    const postDiv = document.createElement('div');
    postDiv.classList.add('post', 'mb-4');
    postDiv.innerHTML = `<h3 class="font-bold">${userName}</h3><p>${userPost}</p>`;
    document.getElementById('posts').prepend(postDiv);
    document.getElementById('communityForm').reset();
});
