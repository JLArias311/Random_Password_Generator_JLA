URL: https://jlarias311.github.io/Random_Password_Generator_JLA/.

In this project I created and embedded JavaScript Code to a HTML document form styled with CSS giving it the ability to generate a random password with a click of the form button.

Once the button is clicked the user is prompted to first create their password criteria-- password length & character types to be used-- through prompt and confirm dialouge boxes.

Once the criteria has been submitted, the password is generated onto the form's text field.

Steps:

1. I added/created variables containing the 4 different character arrays. (These are the charcter type options the user can choose from)

2. I created a variable that selected the button with an id = generator.

3. I declared that a click would begin the writePassword function

4. I started the function with gathering the password rules/ crtierias.

5. The variable chosenLength will hold the user input value, having to be greater than 7 and less than 128. Otherwise the prompt will loop back until a valid number value is entered.

6. Following is a confirm dialogue box giving the variable specialChar the value of true or false. If the user chooses ok the chosenCharacters gains the value of the specialCharacters array. If false chosenCharacters becomes an empty array.

7. Following are 3 more dialogue boxes asking the user if they want to add numeric characters, lowercase characters, and uppercase characters to there password. Each true concatenates the chosen array holding the chaosen characters. Each false skips that array.

8. Now that the password criteria has been set, the password function initaites looping through the concatenated chosenCharacters array randomly collecting a character as many times as the value the user input for the chosenLength.

9. This string "pwd" is returned giving the function password the value of the generated randomized string.

10. The text area with the id = password is selected with the variable passwordText

11. The value of passwordText is given the same value as the password function we just ran, filling in the textarea with the randomized password.