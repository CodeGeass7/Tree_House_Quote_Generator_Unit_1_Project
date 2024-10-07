******************************************/
//-----------------Am looking for exceeds expectations or fail please and thank you----------------



const quotes = // My content library...Aka...  My array of "quotes". 
[
    {quote: `Finding more fallen out hairs on your pillow. Watching your favorite stuffed bread disappear from the convenience store. The accumulation of those little despairs is what makes a person an adult.`, source: `Kento Nanami`, citation: `Jujutsu Kaisen`, year:`October 3, 2020`, tag: `Nostalgia,`,},

    {quote: `Can you Baron around Baron? `, source: `Mav-Kirk`, citation: `Social Democratic Discord`, year:`March 5, 2024`, tag: `Misc`,},
    
    {quote: `For a girl who is always on her phone, she never picks up the phone!`, source: `Ninkachu`, citation: `Social Democratic Discord`, year:`Febuary 29, 2024`, tag: `Humour`,},
    
    {quote: `Get it from a geode dealer not a crystal healer`, source: `Jimmy Snow`, citation: `The Line Call In Show`, year:``, tag: `Witty`,},
    
    {quote: `I slayed A Dragon So I Could Sleep.`, source: `Sloth`, citation: ``, year:``, tag: `Witty, Humour`,},
    
    {quote: `Bastion is a way of life`, source: `NsGamer`, citation: `Social Democratic Discord`, year:`October 29, 2022`, tag: `Misc`,},
    
    {quote: `Fell Asleep Due To Lack Of Sleep`, source: `Amine`, citation: `Social Democratic Discord`, year:`September 9, 2021`, tag: `Humour`,},
    
    {quote: `As long as you don't choose, everything remains possible`, source: `Nemo`, citation: `Mr. Nobody`, year:`2009`, tag: `Witty`,},
    
    {quote: `Exceptional claims demand exceptional evidence.`, source: `Christopher Hitchens`, citation: ``, year:``, tag: `Bold`,},
    
    {quote: `You will never be able to love anybody else until you love yourself.`, source: `Lelouch Lamperouge`, citation: `Code Geass`, year:`October 6, 2006`, tag: `Profound`,},
    
    {quote: `It is at the moment of death that humanity has value.`, source: `Archer`, citation: `Fate Stay Night`, year:``, tag: `Profound`,},
    
    {quote: `Be yourself; everyone else is already taken.`, source: `Oscar Wilde `, citation: ``, year:``, tag: `Witty, Profound`,},
    
    {quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. `, source: `Albert Einstein`, citation: ``, year:``, tag: `Witty, Bold`,},
    
    {quote: `In three words I can sum up everything I've learned about life: it goes on.`, source: `Robert Frost`, citation: ``, year:``, tag: `Profound`,},
    
    {quote: `Theirs not to make reply, Theirs not to reason why, Theirs but to do and die.`, source: `Alfred, Lord Tennyson `, citation: `The Charge of the Light Brigade`, year:`December 9, 1854`, tag: `Bold`,},
    
    {quote: `The vacuum cleaner...the only NASA piece of equipment that doesn't suck on an international space station.`, source: `Steven Swanson`, citation: ``, year:``, tag: `Humour`,},
    
    {quote: `I don't believe in astrology; I'm a Sagittarius and we're skeptical.`, source: `Arthur C. Clarke`, citation: ``, year:``, tag: `Humour`,},
    
    {quote: `I always arrive late at the office, but I make up for it by leaving early.`, source: `Charles Lamb`, citation: ``, year:``, tag: `Humour`,},
    
    {quote: `Don't worry about the world coming to an end today. It is already tomorrow in Australia`, source: `Charles Shulz`, citation: ``, year:``, tag: `Witty, Humour`,},
    
    {quote: `The nearer the dawn the darker the night.`, source: `Henry Wadsworth Longfellow`, citation: ``, year:``, tag: `Dark`,},
]

/* Credit to: "emrhzc" - https://stackoverflow.com/questions/14984643/css-pick-a-random-color-from-array#:~:text=If%20you%20want%20to%20attribute%20a%20bunch%20of%20colors%20to START
I was originally going to change the background color in the same manner as this project. Create an array of colors...create a random number...use that number to select from the array. 
I figured I could automate it with a loop but wasn' sure how so I used the good ole internet. 

Im assuming it works as follows:
Creates function...assigns # to variable rc...runs a for loop 6 times...each time it generates a random number up to 16...concatinates it to rc...and returns the value stored to rc...
Which is a hex number for a color due to the constraints set by the function/loop. (Not sure about the '.toString(16)' part :/  )  
*/

function randomColor(){
  rc = "#";
  for(i=0;i<6;i++){
      rc += Math.floor(Math.random()*16).toString(16);
  }
  return rc;
}

// Credit to: "emrhzc" END 


// Declaration of array selector function
function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * quotes.length); // Generates my random number up to the array "quotes" length. 
 let randomQuote = quotes[randomNumber]; // Assigns the random number to the "quotes" array and then stores that value. 
 return randomQuote; // Designates the information to be returned by the invocation of the function. 
}

// Declaration of function used to formulate the html string.
function printQuote(){
let quoteToDisplay = getRandomQuote(); // Selecting a random array and then storing it as a static value in "quoteToDisplay".
let writeToHtml = `<p class="quote">${quoteToDisplay.quote}</p> <p class="source"> ${quoteToDisplay.source}`; // Assigning two assumed properties (quote/source) to the variable "wrtiteToHtml" for further formulation if certain condtions are met. 

if (quoteToDisplay.citation !== `` ){ // Conditional check for for property: citation.
writeToHtml = `${writeToHtml}<span class="citation">${quoteToDisplay.citation}</span>`; // Concatination of citation if condition is met.
}
if (quoteToDisplay.year !== `` ){ // Conditional check for for property: year.
writeToHtml = `${writeToHtml}<span class="year">${quoteToDisplay.year}</span>`; // Concatination of year if condition is met.
}
if (quoteToDisplay.tag !== `` ){ // Conditional check for for property: tag. 
writeToHtml = `${writeToHtml}<span class="year">${quoteToDisplay.tag}</span>`; // Concatination of tag if condition is met.
}
writeToHtml = `${writeToHtml}</p>`; // Concatination of closing html bracket after conditions have been checked.

document.getElementById('quote-box').innerHTML = writeToHtml ; // Designating the insertion point of the html string. 

let colorMe = randomColor(); // Assigning a variable to the color function.  

document.body.style.backgroundColor = colorMe; // Designating the insertion point of the random color. 
}

document.getElementById('load-quote').addEventListener("click", printQuote, false); // Creates a perverbial trigger under the button 'load-quote' and points it to the 'printQuote' function. 

let userInput = prompt(`By default quotes are static. If you would dynamic quotes enter "2".`); // A prompt to gather user info

if (parseInt(userInput) == 2){   // Condtion to check if auto refresh is desired
  let userTimer = prompt("How often (In seconds) would you like a new quote?");  // Prompt to gather users desired time
setInterval(printQuote, parseInt(userTimer)*1000 ); // Convert user input from miliseconds to seconds and sets interval. 
}
else {
  alert(`Press the "Show another quote" button in the top right for more quotes at your own leisure!`);  // A final message.
}
