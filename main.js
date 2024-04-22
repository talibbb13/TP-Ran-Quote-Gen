function getRandomQuote() {

 var quotes = {
  "Socrates" : '"I Know You will not Believe Me But The Highest Form Of The Human Excellence Is To Question Oneself And Others"',
  "Laszlo Polgar" : '"A Genius is not born, but is Educated and Trained."',
  "Warren Buffett" : '"That is How Knowledge Works. It Builds Up, Like Compound Interest"',
  "Albert Einstein" : '"Anyone who has  never made a mistake, has never tried anything new."',
  "Sandeep Maheshwari" : '"Love Is Not A Temporary Feeling Or Emotion, Emotion And Feeling Change, Sometimes Daily But True Unconditional Love Is Everlasting."',
 }
 
 var authors = Object.keys(quotes);
 var author = authors[Math.floor(Math.random()* authors.length)];
 var quote = quotes[author];
 
 document.getElementById("quoteText").innerHTML = quote
 document.getElementById("authorName").innerHTML = "---" + author;
}


// • Sigma thomas