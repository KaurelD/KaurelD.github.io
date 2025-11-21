const texts = ["DESIGNER", "DEVELOPER", "CONTENT CREATOR", "CONSULTANT"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const span = document.querySelector(".typewriter-text");

    if (!span) return; // biar ga error kalau belum ketemu

    span.textContent = texts[index].slice(0, charIndex);
    charIndex++;

    if (charIndex > texts[index].length) {
        charIndex = 0;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, 150);
}

typeEffect();
