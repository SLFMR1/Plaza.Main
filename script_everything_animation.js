const sentences = [
    "Spark a new era of collaborative genius with Tokenized Services",
    "Experience the new world of Tokenized Services",
    "Elevate your vision with cutting-edge Services from industry experts",
];

const words = [
    "Artist Service", "DApp Development", "Tutoring", "Promotions",
    "Smart Contract Development", "NFT Minting Services", "Sponsorship", "Web3 UX/UI Design",
    "Marketing Services", "Community Building", "Smart Contract Auditing", "Legal Consultation",
    "Token-Gateing", "Game Design", "Podcast Production", "Technical Documentation",
    "Video Production", "Tokenomics Consulting", "DAO Governance","Web3 Content Creation",
    ];

let currentSentenceIndex = 1; 
let currentWordIndex = 0;
let wordCount = 0;
const wordDisplay = document.getElementById('word-display');
const transitionSpeed = 200; 
const pauseDuration = 2500;

function showWord() {
    wordDisplay.classList.remove('word-enter');
    wordDisplay.classList.add('word-exit');
    
    setTimeout(() => {
        if (wordCount < 4) {
            wordDisplay.textContent = words[currentWordIndex];
            currentWordIndex = (currentWordIndex + 1) % words.length;
            wordCount++;
            setTimeout(showWord, transitionSpeed);
        } else {
            wordDisplay.textContent = sentences[currentSentenceIndex];
            currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
            wordCount = 0;
            setTimeout(showWord, pauseDuration);
        }

        wordDisplay.classList.remove('word-exit');
        wordDisplay.classList.add('word-enter');
    }, transitionSpeed / 2);
}

wordDisplay.textContent = sentences[0];
wordDisplay.classList.add('word-enter');
setTimeout(showWord, pauseDuration);