// NASA Exoplanet TAP API Endpoint
const API_KEY = 'NASA_API_KEY'; // Replace with your key from api.nasa.gov or use 'DEMO_KEY'
const QUERY = "SELECT pl_name, pl_bmassj, pl_rade, sy_dist FROM ps WHERE default_flag = 1";
const API_URL = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${encodeURIComponent(QUERY)}&format=json&api_key=${API_KEY}`;

async function fetchExoplanets() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const exoplanets = await response.json();
        
        // Render first 50 results as an example
        displayExoplanets(exoplanets.slice(0, 50));
    } catch (error) {
        console.error('Error fetching exoplanets:', error);
    }
}

function displayExoplanets(exoplanets) {
    const catalog = document.getElementById('exoplanet-catalog');
    catalog.innerHTML = ''; // Clear previous content

    exoplanets.forEach(exoplanet => {
        const card = document.createElement('div');
        card.className = 'exoplanet-card bg-gray-800 p-4 rounded-lg shadow-lg text-white';
        
        // pl_bmassj = Mass in Jupiter masses, pl_rade = Radius in Earth radii, sy_dist = Distance in parsecs
        card.innerHTML = `
            <h2 class="text-xl font-bold">${exoplanet.pl_name}</h2>
            <p>Mass: ${exoplanet.pl_bmassj ? exoplanet.pl_bmassj + ' Jupiter Masses' : 'Unknown'}</p>
            <p>Radius: ${exoplanet.pl_rade ? exoplanet.pl_rade + ' Earth Radii' : 'Unknown'}</p>
            <p>Distance: ${exoplanet.sy_dist ? exoplanet.sy_dist + ' pc' : 'Unknown'}</p>
        `;
        catalog.appendChild(card);
    });
}

// Fetch exoplanets on page load
document.addEventListener('DOMContentLoaded', fetchExoplanets);