window.onload = function () {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const categories;
    let chosenCategory;
    const word;
    const guess;
    let guesses = [];
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

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    };


    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (let i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    };

    canvas = function () {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext("2d");
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    head = function () {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext("2d");
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    };

    frame1 = function () {
        draw(0, 150, 150, 150);
    };

    frame2 = function () {
        draw(10, 0, 10, 600);
    };

    frame3 = function () {
        draw(0, 5, 70, 5);
    };

    frame4 = function () {
        draw(60, 5, 60, 15);
    };

    torso = function () {
        draw(60, 36, 60, 70);
    };

    rightArm = function () {
        draw(60, 46, 100, 50);
    };

    leftArm = function () {
        draw(60, 46, 20, 50);
    };

    rightLeg = function () {
        draw(60, 70, 100, 100);
    };

    leftLeg = function () {
        draw(60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

    check = function () {
        list.onclick = function () {
            let guess = this.innerHTML;
            this.setAttribute("class", "active");
            this.onclick = null;
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                    console.log(1);
                }
            }
            var j = word.indexOf(guess);
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        };
    };
}