//numbers contianed in the array for password
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ">", "<", "=", "+", "-",]

function getPasswordOptions() {
    var length = parseInt(
        window.prompt("How many Characters Would You Like Your Password to Be?")
    );

    if (isNaN(length === true)) {
        window.alert("Password must be Provided as a Number");
        return;
    }
    if (length < 8) {
        window.alert("Password must be at least 8 characters long.");
        return;
    }
    if (length > 128) {
        alert("Password lenght must be less than 129 characters");
        return;
    }
    var hasSpecial = window.confirm(
        "click Ok to confirm including special characters."
    );
    var hasNumbers = window.confirm(
        "click Ok to confirm including numeric characters."
    );

    var hasLowercase = window.confirm(
        "clikc Ok to confirm including lowercase characters."
    );

    var hasUppercase = window.confirm(
        "Click Ok to confirm including uppercase characters."
    );

    if (hasSpecial === false &&
        hasNumbers === false &&
        hasUppercase === false &&
        hasLowercase === false 
    ) {
        window.alert("Must Have at least one character type.");
        return;
    }

    var passwordOptions = {
        length: length,
        hasNumbers: hasNumbers,
        hasUppercase: hasUppercase,
        hasSpecial: hasSpecial,
        hasLowercase: hasLowercase
    };

    return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}










// Assignment code here
function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
    var possibleCharacters = [];
    var garanteedCharacters = [];
    if (options.hasSpecial) {
        possibleCharacters = possibleCharacters.concat(special);
        garanteedCharacters.push(getRandom(special));
    }
    if (options.hasNumbers) {
        possibleCharacters = possibleCharacters.concat(numbers);
        garanteedCharacters.push(getRandom(numbers));
    }
    if (options.hasLowercase) {
        possibleCharacters = possibleCharacters.concat(lowercase);
        garanteedCharacters.push(getRandom(lowercase));
    }
    if (options.hasUppercase) {
        possibleCharacters = possibleCharacters.concat(uppercase);
        garanteedCharacters.push(getRandom(uppercase));
    }
    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }
    for (var i = 0; i < garanteedCharacters.length; i++) {
        result[i] = garanteedCharacters[i];
    }
    return result.join('');
}













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
