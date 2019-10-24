// Get the text area, and word and character count elements
var text = document.querySelector('#text');
var wordCount = document.querySelector('#word-count');
var charCount = document.querySelector('#character-count');
//gets counter paragraph on page
var countSentence = document.querySelector('#count-sentence');


// Listen for changes to the text area content
text.addEventListener('input', function () {

    // Get the word count
    var words = text.value.split(/[\n\r\s]+/g).filter(function (word) {
        return word.length > 0;
    });

    // // Display the word count
    // wordCount.textContent = words.length;

    // // Display the characters count
    // charCount.textContent = text.value.length;

    //assigns word count to a variable
    var spokenWords = words.length;
    //assigns char count to a variable
    var spokenChar = text.value.length;

    
    //displays whole sentence on page so it's easier for screen readers
    countSentence.textContent = "You've written " + spokenWords + " words and " + spokenChar + " characters.";

}, false);