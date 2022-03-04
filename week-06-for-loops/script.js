// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = "Is this a dagger which I see before me, The handle toward my hand? Come, let me clutch thee. I have thee not, and yet I see thee still. Art thou not, fatal vision, sensible To feeling as to sight? or art thou but A dagger of the mind, a false creation, Proceeding from the heat-oppressed brain? I see thee yet, in form as palpable As this which now I draw. Thou marshall'st me the way that I was going; And such an instrument I was to use. Mine eyes are made the fools o' the other senses, Or else worth all the rest; I see thee still, And on thy blade and dudgeon gouts of blood, Which was not so before. There's no such thing: It is the bloody business which informs Thus to mine eyes. Now o'er the one halfworld Nature seems dead, and wicked dreams abuse The curtain'd sleep; witchcraft celebrates Pale Hecate's offerings, and wither'd murder, Alarum'd by his sentinel, the wolf, Whose howl's his watch, thus with his stealthy pace. With Tarquin's ravishing strides, towards his design Moves like a ghost. Thou sure and firm-set earth, Hear not my steps, which way they walk, for fear Thy very stones prate of my whereabout, And take the present horror from the time, Which now suits with it. Whiles I threat, he lives: Words to the heat of deeds too cold breath gives. I go, and it is done; the bell invites me. Hear it not, Duncan; for it is a knell That summons thee to heaven or to hell."
	
// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

// Displays words with less than 4 characters.
function displayShortWords() {
    const shortWordsElement = document.getElementById('short-words');

    for(let i = 0; i < wordsArray.length; i++) {
        const word = wordsArray[i];

        if(word.length < 4) {
            const wordElement = document.createElement('li');
            wordElement.innerText = word;
            shortWordsElement.appendChild(wordElement);
        }
    }
}

// Words that start with J
function displayJWords() {
    const jayWordsElement = document.getElementById('jay-words');

    for(let word of wordsArray) {
        if(word.startsWith('d')){
            const wordElement = document.createElement('li');
            wordElement.innerText = word;
            jayWordsElement.appendChild(wordElement);
        }
    }
}

function displayLongestWord() {
    const longestWordElement = document.getElementById('longest-word');

    let longestWord = wordsArray[0]
    for(let i = 0; i < wordsArray.length; i++) {
        if(wordsArray[i].length > longestWord.length) { 
            longestWord = wordsArray[i];
        }
    }
    const wordElement = document.createElement('li');
    wordElement.innerText = longestWord;
    longestWordElement.appendChild(wordElement);
}

function displayThirdWord() {
    const thirdWordElement = document.getElementById('third-word');

    for(let i = 2; i <= 263; i += 3){
        const word = wordsArray[i];

        if(word){
            const wordElement = document.createElement('li');
        wordElement.innerText = word;
        thirdWordElement.appendChild(wordElement);
        }
    }
}

function displayWeirdWords() { 

    let normalWords = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i'];

    let weirdWordsElement = document.getElementById('weird-words');

    for(let word of wordsArray) {
        if (!normalWords.includes(word.toLowerCase())) {
            const wordElement = document.createElement('li');
            wordElement.innerText = word;
            weirdWordsElement.appendChild(wordElement);
        }
    }
}


function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  displayShortWords();
  displayJWords();
  displayLongestWord();
  displayThirdWord();
  displayWeirdWords();

  // TODO: Call your functions here!
}