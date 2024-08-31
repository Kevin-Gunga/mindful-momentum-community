const message = document.getElementById('message')

const messages = [
    "Your Mind Matters...",
    "Breathe. You're Safe...",
    "Healing Begins Here...",
    "Strength in Support...",
    "You Are Not Alone...",
    "Hope Starts Today...",
    "Empower Your Journey...",
    "Peace of Mind..."
];

let index = 0;

function changeMessage() {
    index = (index + 1) % messages.length;
    document.getElementById("message").textContent = messages[index];
}

// Change message every 3 seconds
setInterval(changeMessage, 4000);

// "Life-Changing Experience" "Joining the Mindful Momentum Community has been a life-changing experience. The mindfulness practices and supportive environment have helped me manage my anxiety and find a sense of inner peace I never thought possible." – Sarah M.

// "Empowering and Uplifting" "The inspirational workshops offered by Mindful Momentum Community have truly empowered me to take control of my life. The speakers are incredibly motivating, and I always leave feeling uplifted and ready to tackle any challenge." – James L.

// "Supportive and Caring Environment" "Being part of the Mindful Momentum Community has provided me with a supportive and caring environment where I feel heard and valued. The psychological services have helped me navigate difficult times with greater resilience and clarity." – Emily R.

// "Personal Growth and Transformation" "I’ve experienced tremendous personal growth since joining the Mindful Momentum Community. The coaching sessions have been instrumental in helping me set and achieve my goals, and I’m now living a more fulfilled and purposeful life." – Michael T.

// "A Beacon of Positivity" "Mindful Momentum Community is a beacon of positivity in my life. The motivational services have given me the confidence to pursue my dreams, and I’m grateful for the continuous encouragement and support from this amazing community." – Laura K.