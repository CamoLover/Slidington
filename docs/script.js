document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#start').scrollIntoView({ behavior: 'smooth' });
});

function copyToClipboard(button) {
    const codeElement = button.parentElement.querySelector('code');
    const text = codeElement.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
        button.setAttribute('title', 'Code Copied!');
        setTimeout(() => {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-copy');
            button.removeAttribute('title');
        }, 2000);
    });
}

// Konami Code Implementation
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
let hackerMode = false;

// Matrix rain effect
function createMatrixRain() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const columns = Math.floor(window.innerWidth / 20);

for (let i = 0; i < columns; i++) {
const character = document.createElement('div');
character.className = 'matrix-character';
character.style.left = i * 20 + 'px';
character.style.animationDuration = Math.random() * 2 + 1 + 's';
character.style.opacity = Math.random();
character.innerHTML = characters[Math.floor(Math.random() * characters.length)];

document.body.appendChild(character);

setInterval(() => {
    character.innerHTML = characters[Math.floor(Math.random() * characters.length)];
    character.style.animation = 'none';
    character.offsetHeight; // Trigger reflow
    character.style.animation = `matrix-rain ${Math.random() * 2 + 1}s linear infinite`;
}, Math.random() * 2000 + 1000);
}
}

// Glitch effect for text
function addGlitchEffect() {
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach(heading => heading.classList.add('glitch'));
}

// Toggle hacker mode
function toggleHackerMode() {
hackerMode = !hackerMode;
document.body.classList.toggle('hacker-mode');

const terminalPrompt = document.querySelector('.terminal-prompt');
terminalPrompt.style.display = hackerMode ? 'block' : 'none';

if (hackerMode) {
createMatrixRain();
addGlitchEffect();

// Create typewriter effect for terminal prompt
const terminalText = "Access granted: HACKER MODE ACTIVATED_";
let i = 0;
terminalPrompt.textContent = '';
const typeWriter = setInterval(() => {
    if (i < terminalText.length) {
        terminalPrompt.textContent += terminalText.charAt(i);
        i++;
    } else {
        clearInterval(typeWriter);
    }
}, 50);
} else {
// Remove matrix characters when disabling hacker mode
const matrixCharacters = document.querySelectorAll('.matrix-character');
matrixCharacters.forEach(char => char.remove());

// Remove glitch effect
const glitchElements = document.querySelectorAll('.glitch');
glitchElements.forEach(element => element.classList.remove('glitch'));
}
}

// Listen for Konami code
document.addEventListener('keydown', (e) => {
// Get the key pressed
const key = e.key.toLowerCase();

// Check if the key matches the current expected key in the sequence
if (key === konamiCode[konamiIndex].toLowerCase()) {
konamiIndex++;

// If we've matched all keys, trigger the easter egg
if (konamiIndex === konamiCode.length) {
    toggleHackerMode();
    konamiIndex = 0; // Reset the index
}
} else {
konamiIndex = 0; // Reset if wrong key is pressed
}
});

// Reset matrix rain on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
clearTimeout(resizeTimeout);
resizeTimeout = setTimeout(() => {
if (hackerMode) {
    const matrixCharacters = document.querySelectorAll('.matrix-character');
    matrixCharacters.forEach(char => char.remove());
    createMatrixRain();
}
}, 250);
});