// Setup Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1); // Set background to black
document.getElementById('skyChart').appendChild(renderer.domElement);

// Load star data via API
async function loadStarData() {
  try {
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
    const data = await response.json();
    console.log(data); // Debugging to see the response structure

    data.bodies.forEach(body => {
      if (body.isStar) { // Check if body is a star
        console.log(`Creating star: ${body.englishName} at distance: ${body.semimajorAxis}`);
        createStar(body.semimajorAxis, body.englishName);
      }
    });
  } catch (error) {
    console.error('Failed to load data:', error);
  }
}

// Create star in the 3D scene
function createStar(distance, name) {
  const geometry = new THREE.SphereGeometry(1, 32, 32); // Increased size
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const star = new THREE.Mesh(geometry, material);

  // Randomize position based on distance from origin
  star.position.set(
    (Math.random() - 0.5) * distance * 0.1, // Adjusted scaling factor
    (Math.random() - 0.5) * distance * 0.1,
    (Math.random() - 0.5) * distance * 0.1
  );

  scene.add(star);
}

// Basic scene setup
camera.position.z = 50; // Move the camera further back

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Fetch data and populate stars
loadStarData();
animate();
