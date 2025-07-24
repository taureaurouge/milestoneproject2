


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

// adding a collection of words

const nounsSingular = ["the house", "this industry", "this towns", "dongle", "opportunity", "class", "doogle-leaves", "nonsense", "muy bien"]

const nounsPlural = ["buttress", "banana", "wonks", "losers", "brothers", "the commoners", "the monks", "children of the"]

const adjectives = ["chockablock", "boring", "attractive", "classy", "bonkers", "very delightful", "too dreadful to", "fancy", "faithful to", "ambitious", "dirty"]

const verbs = ["ballyrag", "fishing for", "remain", "jump", "become", "get over", "wish for", "finish up the", "fixing", "flirting with the"]

const superlatives = ["best", "baddest", "longest", "cutest", "biggest", "smallest", "cleanest", "busiest", "coldest", "worst", "highest"]

const prepositions = ["in the", "on the", "under the", "behind the", "at", "by", "between"]

const words = [nounsSingular, nounsPlural, adjectives, verbs, superlatives, prepositions]



// glöm inte + mellanslag!