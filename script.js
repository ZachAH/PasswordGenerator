//var for charcodes including alphabet letters, numbers 1-9, and special characters
var numbers = [Math.floor(Math.random() * 10)];
var lowercase = [String.fromCharCode(Math.floor(Math.random() * 26)+97)];
var uppercase = [String.fromCharCode(Math.floor(Math.random() * 26)+65)];
var special = [String.fromCharCode(Math.floor(Math.random() * 15)+33)];
        //all the password prompts to create the password
function getPasswordOptions() {
    //if user types in letters it will turn them into a number string
    var length = parseInt(
        window.prompt("How many Characters Would You Like Your Password to Be?")
        );
    //must be 8 or more characters to complete
    if (length < 8) {
        window.alert("Password must be at least 8 characters long.");
        return;
    }
    //can't be more than 129 characters long
    if (length > 128) {
        window.alert("Password lenght must be less than 129 characters");
        return;
    }
   //the next four window confirms are to select if they want or do not want the below characters in their password
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

   //boolean argument for if they do not contain any of the characters the user will have to at least pick one to make a password succefully
    if (hasSpecial === false &&
        hasNumbers === false &&
        hasUppercase === false &&
        hasLowercase === false
    ) {
        window.alert("Must Have at least one character type.");
        return;
    }

    //boolean arguments for  using the above var arrays set up
    var passwordOptions = {
        length: length,
        hasNumbers: hasNumbers,
        hasUppercase: hasUppercase,
        hasSpecial: hasSpecial,
        hasLowercase: hasLowercase
    };

    return passwordOptions;
}
//using math.random and math.floor to use the arrays we have set up to convert to random numbers or characters based on the choices the user made
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}










// Assignment code here
function generatePassword() {
    //any of the arrays the choose from
    var options = getPasswordOptions();
    var result = [];
    var possibleCharacters = [];
    var garanteedCharacters = [];
    
    //boolean arguments that are true grabbing one or more of the characters the user wants in there password grabbing them out of the arrays above
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
    // taking the var and adding 1 to the list of characters they choose containing the arrays set up and then taking the stored information and passing it to the password generator box
    for (var i = 0; i < garanteedCharacters.length; i++) {
        result[i] = garanteedCharacters[i];
    }
    return result.join('');
}













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// final password will appear in the query with the id of #password 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// on click the button will prompt user for password questions
generateBtn.addEventListener("click", writePassword);
