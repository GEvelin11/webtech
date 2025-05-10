const targetNumber = Math.floor(Math.random() * 1000001);
const maxAttempts = 20;
let attempts = 0;

alert("Üdvözöllek a számkitaláló játékban! Próbáld meg kitalálni a számot 0 és 1 000 000 között.");

function guessNumber() {
    while (attempts < maxAttempts) {
        let userInput = prompt("Adj meg egy számot: ");
        let userGuess = parseInt(userInput, 10);

        if (isNaN(userGuess) || userGuess < 0 || userGuess > 1000000) {
            alert("Érvénytelen bemenet! Adj meg egy számot 0 és 1 000 000 között.");
            continue;
        }
        
        attempts++;
        
        if (userGuess === targetNumber) {
            alert(`Gratulálok, ${attempts} lépésből eltaláltad!`);
            return;
        } else if (userGuess > targetNumber) {
            alert(`${attempts}. tipp nem talált: A megoldás kisebb.`);
        } else {
            alert(`${attempts}. tipp nem talált: A megoldás nagyobb.`);
        }
    }
    alert("Sajnos ez most nem sikerült!");
}

guessNumber();
