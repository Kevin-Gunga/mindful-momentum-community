const message = document.getElementById('message')

const messages = [
    "Your Mind Matters",
    "Breathe. You're Safe",
    "Healing Begins Here",
    "Strength in Support",
    "You Are Not Alone",
    "Hope Starts Today",
    "Empower Your Journey",
    "Peace of Mind"
];

let index = 0;

function changeMessage() {
    index = (index + 1) % messages.length;
    document.getElementById("message").textContent = messages[index];
}

// Change message every 3 seconds
setInterval(changeMessage, 4000);