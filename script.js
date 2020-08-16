window.onload = function () {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const categories;
    let chosenCategory;
    const word;
    const guess;
    let geusses = [];
    const lives;
    let counter;
    const space;

    let showLives = document.getElementById("mylives");
    console.log(showLives);
    let showCatagory = document.getElementById("scatagory");

    let buttons = function () {
        myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");

        for (let i = 0; i < alphabet.length; i++) {
            letters.id = "alphabet";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };

    let selectCat = function () {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML =
                "The Chosen Category Is Premier League Football Teams";
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "The Chosen Category Is Films";
        } else if (chosenCategory === categories[2]) {
            catagoryName.innerHTML = "The Chosen Category Is Cities";
        }
    };


    // Create geusses ul TODO
    result = function () {
        wordHolder = document.getElementById("hold");
        correct = document.createElement("ul");

        for (let i = 0; i < word.length; i++) {
            correct.setAttribute("id", "my-word");
            guess = document.createElement("li");
            guess.setAttribute("class", "guess");
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    };

}