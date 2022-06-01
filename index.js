// console.log("Hello World");


//3. Create a variable number that will store the value of the number provided by the user via the prompt.

let number = Number(prompt("Please provide a number"));
console.log("The number you provided:" +number);

// 4. Create a for loop that will be initialized with the number provided by the user, will stop when the value is less than or equal to 0 and will decrease by 1 every iteration.

for( z = number; z > 0; z--){

// 5. Create a condition that if the current value is less than or equal to 50, stop the loop.

if(z <= 50){
		console.log("The current value is at 50.")
		break;
	}


// 6. Create another condition that if the current value is divisible by 10, print a message that the number is being skipped and continue to the next iteration of the loop.
else if(z % 10 == 0){
		console.log("The number is divisible by 10.")
		continue;
	}

// 7. Create another condition that if the current value is divisible by 5, print the number

else if(z % 5 == 0){
		console.log(z);
	}

}


//8. Create a variable that will contain the string supercalifragilisticexpialidocious.

let myString = "supercalifragilisticexpialidocious";

// 9. Create another variable that will store the consonants from the string.

let myName = "";

// 10. Create another for Loop that will iterate through the individual letters of the string based on it’s length.

for (i = 0; i < myString.length; i++){

// 11. Create an if statement that will check if the letter of the string is equal to a vowel and continue to the next iteration of the loop if it is true.

if(myString[i].toLowerCase() == 'a' || myString[i].toLowerCase() == 'e' || myString[i].toLowerCase() == 'i' || myString[i].toLowerCase() == 'o' || myString[i].toLowerCase() == 'u')
	{   
		console.log(myString);
		continue;
	}

// 12. Create an else statement that will add the letter to the second variable.

else{
		myName += myString[i]
	}
}
console.log(myName);