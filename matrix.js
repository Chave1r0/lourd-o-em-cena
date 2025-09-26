const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to be used (Katakana, Latin alphabet, numbers)
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize; // Number of columns

// Array to store the y-coordinate of each falling character
const rainDrops = [];
for (let x = 0; x < columns; x++) {
    rainDrops[x] = canvas.height / fontSize; // Initialize each column at the top
}

function draw() {
    // Make the canvas slightly transparent black to create the fading trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgb(212, 212, 102)'; // Green color for the characters
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset the drop if it reaches the bottom, with a random chance
        if (rainDrops[i] * fontSize < 0 && Math.random() > 0.975) {
            rainDrops[i] = canvas.height / fontSize;
        }

        // Increment the y-coordinate to make the character fall
        rainDrops[i]--;
    }
}

// Animate the effect
setInterval(draw, 30); // Adjust interval for speed