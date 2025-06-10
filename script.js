const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredientsList = Array.from(document.querySelectorAll("#ingredientsList li")).map(li => li.textContent);

function randomColour(){
    const letters = "0123456789ABCDEF";
    let colour = "#";

    for (let i = 0; i < 6; i++){
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour
}

function generateSpell(){
    let count = 3;
    spellArea.textContent = count;

    const countdown = setInterval(() => {
        count--;
        if (count > 0) {
            spellArea.textContent = count;
        } else {
            clearInterval(countdown);

            const randomIngredient = ingredientsList[Math.floor(Math.random() * ingredientsList.length)];
            spellArea.textContent = randomIngredient;
            spellArea.style.backgroundColor = randomColour();
        }
    }, 1000);
}

function resetSpell() {
    spellArea.textContent = null;
    spellArea.style.backgroundColor = "#ffffff";
}

generateButton.onclick = generateSpell;
resetButton.onclick = resetSpell;