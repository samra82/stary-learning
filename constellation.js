// Get the canvas elements and buttons
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const canvasOptions = document.querySelectorAll('.canvas-option');
const saveBtn = document.getElementById('saveBtn');
const userNameInput = document.getElementById('userName');

let isDrawing = false;
let selectedCanvas = 'canvas1.jpg'; // Default canvas background

// Function to set canvas background
function setCanvasBackground(imageId) {
    const img = new Image();
    img.src = imageId;
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
}

// Function to start drawing
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Function to draw lines
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});

// Save button functionality
saveBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();
    if (!name) {
        alert('Please enter your name before saving.');
        return;
    }

    const dataURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `${name}_constellation.png`;
    link.click();
});

// Add event listeners to canvas options
canvasOptions.forEach((canvasOption) => {
    canvasOption.addEventListener('click', (e) => {
        selectedCanvas = e.target.id + '.jpg'; 
        setCanvasBackground(selectedCanvas);
    });
});

// Set initial canvas background
setCanvasBackground(selectedCanvas);
