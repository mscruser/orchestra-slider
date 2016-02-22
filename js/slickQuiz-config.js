// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Orchestra Quiz",
        "main":    "<p>Let's see how much you really remember!</p>",
        "results": "",
        "level1":  "You're ready to be a conductor!",
        "level2":  "Bravo!",
        "level3":  "Not bad!",
        "level4":  "Time to review!",
        "level5":  "Whoops..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is the biggest instrument in the <br>string section?",
            "a": [
                {"option": "Trumpet",      "correct": false},
                {"option": "Double bass",     "correct": true},
                {"option": "Saxophone",      "correct": false},
                {"option": "French horn",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span>I'm impressed.</p>",
            "incorrect": "<p><span>Uhh no.</span> That would be the double bass!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following instruments have valves? <br>Select ALL that apply.",
            "a": [
                {"option": "Harp",               "correct": false},
                {"option": "Trumpet",   "correct": true},
                {"option": "Saxophone",               "correct": true},
                {"option": "French horn", "correct": true} // no comma here
            ],

            "correct": "<p><span>Nice!</span> That was a tough one. </p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "If you unwound a trumpet, how long <br>would it be?",
            "a": [
                {"option": "17 inches",           "correct":false},
                {"option": "Infinity",                  "correct": false},
                {"option": "6 1/2 feet",  "correct": true},
                {"option": "17 feet",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span>That's pretty long. </p>",
            "incorrect": "<p><span>No...</span>It's actually 6 1/2 feet!</p>" // no comma here
        },
        { // Question 4
            "q": "Which instrument has a part called a <br>bell?",
            "a": [
                {"option": "French horn",    "correct": true},
                {"option": "Trumpet",     "correct": false},
                {"option": "None of them",      "correct": false},
                {"option": "Harp",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>It's the wide part at the bottom.</p>",
            "incorrect": "<p><span>Nope.</span>It's the french horn!</p>" // no comma here
        },
        { // Question 5
            "q": "Which orchestra instrument will you <br>learn now?",
            "a": [
              {"option": "French horn",    "correct": true},
              {"option": "Eh, I'm not really interested",     "correct": false},
              {"option": "Trumpet",      "correct": true},
              {"option": "Harp",   "correct": true}, // no comma here
              {"option": "Saxophone",   "correct": true},
              {"option": "Double bass",   "correct": true}
            ],
            "select_any": true,
            "correct": "<p><span>Good answer!</span>That's a fun instrument to play.</p>",
            "incorrect": "<p><span>Nice try. </span> That doesn't count.</p>" // no comma here
        } // no comma here
    ]
};
