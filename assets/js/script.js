// linking the info-button aswell as the info-text

const infoBtn = document.getElementById('info-btn');

const info = document.getElementById('info');

// when button is clicked run a function which changes the info styling property from invisible to visible
// prevents the click event from bubbling up to parent elements, so it doesn't trigger the document-level listener that hides the info box

infoBtn.addEventListener('click', (event) => {
    info.style.display = 'inline-block';
    event.stopPropagation();
});

// when anything in the document is being clicked the info-box disappears again

document.addEventListener('click', () => {
    info.style.display = 'none';
});

// -----------------------------------------------------

// adding a collection of words; apprently a more efficient way of doing so

const categories = {
    nounsSingular: {
        weight: 10,
        words: ["the house ", "this industry ", "this towns ", "dongle ", "opportunity ", "class ", "doogle-leaves ", "nonsense ", "muy bien "]
    },
    nounsPlural: {
        weight: 5,
        words: ["buttress ", "banana ", "wonks ", "losers ", "brothers ", "the commoners ", "the monks ", "children of the "]
    },
    adjectives: {
        weight: 8,
        words: ["chockablock ", "boring ", "attractive ", "classy ", "bonkers ", "very delightful ", "too dreadful to ", "fancy ", "faithful to ", "ambitious ", "dirty "]
    },
    verbs: {
        weight: 15,
        words: ["ballyrag ", "fishing for ", "remain ", "jump ", "become ", "get over ", "wish for ", "finish up the ", "fixing ", "flirting with "]
    },
    superlatives: {
        weight: 7,
        words: ["best ", "baddest ", "longest ", "cutest ", "biggest ", "smallest ", "cleanest ", "busiest ", "coldest ", "worst ", "highest "]
    },
    prepositions: {
        weight: 10,
        words: ["in the ", "on the ", "under the ", "behind the ", "at ", "by ", "between "]
    },
    conjunctions: {
        weight: 5,
        words: ["and ", "but ", "for ", "too ", "so ", "yet ", "because ", "although ", "since ", "unless ", "while ", "when "]
    },
    pronouns: {
        weight: 10,
        words: ["he ", "she ", "it ", "they ", "we ", "you "]
    },
    determiners: {
        weight: 10,
        words: ["the ", "a ", "an ", "this ", "those ", "some "]
    },
    adverbs: {
        weight: 10,
        words: ["easily ", "rarely ", "fast ", "badly ", "frequently ", "always ", "happily ", "certainly "]
    },
    punctuation: {
        weight: 10,
        words: [". ", ", ", "! ", "? ", ": "]
    },

}

// making the sentence an array

let sentence = [];

// a function responsible for choosing a category based on "weight probability".

function chooseCategory(categories) {
    const weightTotal = Object.values(categories).reduce((sum, cat) => sum + cat.weight, 0);        // a way of calculating the total weight 
    const rng = Math.random() * weightTotal;                                                        // using the total weight with the random-method to randomly generate a relevant number
    let accumulated = 0;                                                                            // in order for our loop to start from 0

    for (const [name, cat] of Object.entries(categories)) {                                         // looping through the categories
        accumulated += cat.weight;                                                                  // add category.weight to "accumulated"
        if (rng <= accumulated) {                                                                   // if randomized number less or equal to "accumulated"
            return name;                                                                            // return category.name
        }
    }
}

// a function responsible for choosing a random word from the choosen category

function chooseWord(categoryName, categories) {
    const wordList = categories[categoryName].words;
    const index = Math.floor(Math.random() * wordList.length);                                      // index = randomized word from category.word
    return wordList[index];
}

// link text output and input

const correctWord = document.getElementById("correct-words");
const textArea = document.getElementById("text-area");
const form = document.getElementById("input-words");

// adding feedback-element to communicate current state to the user

const feedbackElement = document.createElement("p");

if (!document.getElementById("feedback")) {
    feedbackElement.id = "feedback";
    correctWord.parentNode.appendChild(feedbackElement);
}

// a variable existing to know whether the game is running or not

let gameActive = true;

// listening for submit-action

form.addEventListener("submit", formSubmitHandler);

// form submit-function to send the value in the text-area

function formSubmitHandler(event) {
    event.preventDefault();
    checkSentence(textArea.value);
}

// new randomized word

function addWord() {
    const category = chooseCategory(categories);
    const word = chooseWord(category, categories);
    sentence.push(word);                                                        // add to sentence-array
    correctWord.textContent = word.trim();                                      // to make sure only the last word of the sentence is being shown
}

// a function to compare the user-input-content with the with the current sentence

function checkSentence(input) {
    if (!gameActive) return;

    const correctSentence = sentence.join("").trim();           // composing the sentence
    if (input.trim() === correctSentence) {                     // comparing the existing sentence with the user submitted one
        feedbackElement.textContent = "correct, so far";
        addWord();
        textArea.value = "";                                    // reseting so the text-area
    } else {                                                    // whenever the user input content wont match the current generated sentence, turn the game.active = false and add feedback in the text-area
        correctWord.textContent = "Game Over (●'◡'●)";         
        textArea.value = "";
        gameActive = false;
    }
}

// Start the game with the first word visible
addWord();
