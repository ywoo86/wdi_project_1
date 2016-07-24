# Project 1 - Mastermind

---

### Description
Mastermind is a logical reasoning, code breaking simulation. Usually played with two players: the first as the code setter, and the second as the code breaker. The first player, in this case the computer, sets a random pattern of non-repeating colors. The second player, or the user, makes up to ten attempts to guess the pattern. The first player provides clues by leaving behind either white or black pegs after each guess: 

* A white peg signifies that a chosen color is found in the pattern and correctly placed
* A black peg signifies that a chosen color is found in the pattern and in the wrong position

After ten failed attempts the game is over and the board is reset. An option to play again is available.

---

### Technology Used
The following technologies were used for this game:

* HTML
* CSS
* and Javascript (+ jQuery library)

---

### User Stories
1. As a user, you can click and place icons in an order to guess the right combo
2. As the admin, we will assign a randomly selected combo for the user to guess
3. As the admin, we will check the user input combo and let the user know if any are correct and in the right position so user can reevaluate combo
4. As the admin, we will check the user input combo and let the user know if any are correct and in the wrong position so user can reevaluate combo

---

### Pseudocode
**Minimal Viable Product:**

* Randomize four (4) colors from an array of six (6) colors
* User selects four (4) colors in order (this is their guess)
* Computer checks if user array is same as random array
* If a color & position correct then white_peg++
* If a color correct & position incorrect then black_peg++
* Show number of each white peg and black peg
* If all colors & positions correct then winners circle
* If not all color & position correct then increment attempt and prepend guess div
* If 10 attempts and not guessed then losers lounge

---

### Wireframes
![Initial Board](http://i.imgur.com/xPIO9jF.png)
![Second Attempt](http://i.imgur.com/ISDu7xp.png)

---

### Issues & Resolutions

* HTML elements layout -> use of flex to manage containers
* Select four (4) colors and four (4) positions and increment count -> moved count into the color click and the check logic inside the position click
* Checking the pattern with indexOf -> MDN research
* Prepend a new div element without effecting the previous choices -> added 'active' class to new div element and removed the class from the previous guesses
* New div prepend could not be clicked -> calling of functions was reordered
* Reset of board -> reset all global variables inside the fullReset function
* Blinking text to signify win/loss -> blog site with explanation of keyframes

---

### Sources

* [Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery API](http://api.jquery.com/)
* [Vikas Kapadiya's Blog](https://www.kapadiya.net/snippets/how-to-make-blinking-flashing-text-with-css3-and-jquery/)
* [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
