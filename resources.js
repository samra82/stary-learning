// NASA API setup
const NASA_API_KEY = 'qo6Y26ez6uiBEmQLlf7nenvPiERwMTQH84JKEllg';
const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=5`;

// Function to fetch NASA articles (images) using APOD API
function fetchNasaArticles() {
    fetch(NASA_APOD_URL)
        .then(response => response.json())
        .then(data => {
            const nasaArticles = document.getElementById('nasaArticles');
            nasaArticles.innerHTML = ''; // Clear previous content

            data.forEach(item => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <img src="${item.url}" alt="${item.title}" style="width:100%">
                    <h3>${item.title}</h3>
                    <p>${item.explanation.substring(0, 100)}...</p>
                `;
                nasaArticles.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NASA articles:', error);
        });
}

// Fetch YouTube videos related to space (replace with YouTube Data API)
function fetchYoutubeVideos() {
    // Example using YouTube API or a static list of space-related videos
    const videos = [
        {
            title: "Journey to the Edge of the Universe",
            url: "https://www.youtube.com/watch?v=t6rHHnABoT8"
        },
        {
            title: "How the Universe Works",
            url: "https://www.youtube.com/watch?v=EDfAu6GozNE"
        },
        {
            title: "The Largest Star in the Universe",
            url: "https://www.youtube.com/watch?v=GoW8Tf7hTGA"
        }
    ];

    const youtubeVideos = document.getElementById('youtubeVideos');
    youtubeVideos.innerHTML = ''; // Clear previous content

    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');
        videoDiv.innerHTML = `
            <h3>${video.title}</h3>
            <a href="${video.url}" target="_blank">Watch Now</a>
        `;
        youtubeVideos.appendChild(videoDiv);
    });
}
