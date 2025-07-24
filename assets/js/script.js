


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
        words: ["ballyrag ", "fishing for ", "remain ", "jump ", "become ", "get over ", "wish for ", "finish up the ", "fixing ", "flirting with the "]
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

// generating a sentence

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


const category = chooseCategory(categories);
const word = chooseWord(category, categories);
console.log(`Category: ${category}, Word: ${word}`);                                                // print result of category-function + word-function

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

