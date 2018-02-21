const rs = require("readline-sync");
const fs = require("fs");
function howMuchVowels(tekst) {
    let vowels = 0;
    let letter = ["a", "e", "i", "o", "u", "y"];
    for (let i = 0; i < tekst.length; i++) {
        for (let l = 0; l < letter.length; l++) {
            if (tekst[i] == letter[l]) {
                vowels++;
            }
        }
    }
    console.log(vowels);
}
let way = rs.question("Jak chcesz wprowadzić tekst\n ręcznie [R]\n z pliku [P] ");

if (way == "R") {
    let text = rs.question("Podaj tekst: ");
    howMuchVowels(text);
}
if (way == "P") {
    let plik = rs.question("Podaj źródło pliku: ");
    let text = fs.readFileSync(__dirname + "/" + plik);
    howMuchVowels(text);
}
