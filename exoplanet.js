// script.js

const API_URL = 'https://api.le-systeme-solaire.net/rest/bodies/'; // Update with the actual NASA API endpoint

async function fetchExoplanets() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const exoplanets = data.bodies.filter(body => body.isPlanet); // Adjust based on the actual data structure

        displayExoplanets(exoplanets);
    } catch (error) {
        console.error('Error fetching exoplanets:', error);
    }
}

function displayExoplanets(exoplanets) {
    const catalog = document.getElementById('exoplanet-catalog');

    exoplanets.forEach(exoplanet => {
        const card = document.createElement('div');
        card.className = 'exoplanet-card bg-gray-800 p-4 rounded-lg shadow-lg';
        card.innerHTML = `
            <h2 class="text-xl font-bold">${exoplanet.name}</h2>
            <p>Mass: ${exoplanet.mass?.massValue || 'Unknown'} Earth Masses</p>
            <p>Radius: ${exoplanet.meanRadius || 'Unknown'} km</p>
            <p>Distance: ${exoplanet.semimajorAxis || 'Unknown'} AU</p>
        `;
        catalog.appendChild(card);
    });
}

// Fetch exoplanets on page load
document.addEventListener('DOMContentLoaded', fetchExoplanets);
