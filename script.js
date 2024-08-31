const quotes = [
    { text: "Jgn Lupa Ke gereja yaaa", author: "- Michael" },
    { text: "God Bless U Filusss😇", author: "- Tetha" },
    { text: "Bergembiralah karena TUHAN! Maka Ia akan memberikan kepadamu apa yang diinginkan hatimu. Serahkanlah hidupmu kepada TUHAN dan percayalah kepada-Nya, dan Ia akan bertindak.", author: "Mazmur 37:4-5 " },
    { text: "Have a nice day yaaa, jgn sedih kalau ada apa apa bisa cerita ke aku kok jgn sungkannn😊", author: "- Michaellll" }
];

let currentIndex = 0;

function changeQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = quotes[currentIndex].text;
        authorElement.textContent = quotes[currentIndex].author;

        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % quotes.length;
    }, 1000); // Delay to match the fade-out effect
}

function getRandomColor() {
    // Generate a random hex color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animateBackground() {
    const backgroundElement = document.getElementById('background');
    
    function updateBackground() {
        backgroundElement.style.background = `radial-gradient(circle, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    }

    updateBackground(); // Initial background

    setInterval(() => {
        backgroundElement.style.opacity = 0;
        setTimeout(() => {
            updateBackground();
            backgroundElement.style.opacity = 0.5;
        }, 1000); // Fade-out duration
    }, 6000); // Change background every 6 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    animateBackground();
    changeQuote(); // Initial call
    setInterval(changeQuote, 6000); // Change quote every 6 seconds
});
