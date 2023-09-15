const quoteContainer  = document.getElementById('quote-container');
const quoteText  = document.getElementById('quote');
const authorText  = document.getElementById('author');
const twitterBtn  = document.getElementById('twitter');
const newQuoteBtn  = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// let apiQuotes = [];

// show new quotes locally
function newQuote() {
    loading();
    // Pick a random quote from api array 
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        // check for null data and replace for unknown
        if (!quote.author) {
            author.text = 'Unknown';
        } else {
            authorText.textContent = quote.author;
        }
        // check quote lenght to determine styling
        if (quote.text.length > 150) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        // set quote , hide loader 
        quoteText.textContent = quote.text;
        complete();
}

// show new quote from api
// function newQuote() {
//     // Pick a random quote from api array 
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     // check for null data and replace for unknown
//     if (!quote.author) {
//         author.text = 'Unknown';
//     } else {
//         authorText.textContent = quote.author;
//     }
//     // check quote lenght to determine styling
//     if (quote.text.length > 120) {
//         quoteText.classList.add('long-quote');
//     } else {
//         quoteText.classList.remove('long-quote');
//     }
//     quoteText.textContent = quote.text;
// }

// Get Quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error) {
//         // catching errors
//     }
// }

// tweet a code
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
// getQuotes();
newQuote();
// loading();