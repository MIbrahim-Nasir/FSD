function generatePassword() {
    // Define characters to include in the password
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/';

    let Uppercase = document.getElementById("Uppercase");
    let Lowercase = document.getElementById("Lowercase");
    let Numbers = document.getElementById("Numbers");
    let Special = document.getElementById("Special");
    let select = false

    // Combine all characters based on user preferences
    let allChars = '';
    if (Uppercase.checked) {
        allChars += uppercaseChars;
        select = true;
    }
    if (Lowercase.checked) {
        allChars += lowercaseChars;
        select = true;
    }
    if (Numbers.checked) {
        allChars += numberChars;
        select = true;
    }
    if (Special.checked) {
        allChars += specialChars;
        select = true;
    }
    if (select == false) {
        alert('Please select at least one character type.');
        return;
    }

    // Get user input for password length
    const passwordLength = prompt('Enter the length of the password (between 8 and 20 characters):');
    
    // Validate the input
    if (!passwordLength || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 20) {
        alert('Please enter a valid password length between 8 and 20 characters.');
        return;
    }

    

    // Generate the password
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    // Display the password
    document.getElementById('password-result').value = password;
}