import { DisplayableDigit } from "../models/DisplayableDigit";
import { ShowDigit } from "../vues/ShowDigit";
import {Digit} from "../models/digit";
import * as readline from 'readline';

//Init of input entry
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Init of the model DisplayableDigit, where all figures have their own grid that will be displayed
let DD = new DisplayableDigit();

//Init of the vue ShowDigit that use the previous model to print it
let SD = new ShowDigit();

//main Function called by main.js
export default function main(){

    //Introduction
    console.log("--------------------------------------");
    console.log("                                      ");
    console.log("             LCD Display              ");
    console.log("                                      ");
    console.log("--------------------------------------");

    console.log("\nThis little program simulates a LCD display. For instance, if you want to display the number 5, it will print like this : ");
    SD.ShowOneDigit(DD.digits[5]);

    //Recursive function that asked the user to type the digit
    //Verify that the entry is actually a integer that as less than 20 figures
    const recursiveAsyncReadline = function () {
        rl.question("What number would you like to display ? Press \'quit\' if you want to exit the program\n\t", (answer) => {
            let number = parseInt(answer, 10);
            if (answer === 'quit') {
                return rl.close();
            } else {
                if (isNaN(number)) { // Wrong entry
                    console.log("Wrong input, try typing only numbers\n");
                } else if (number > 0 && answer.length < 20) { // Valid Entry
                    // Creation of an array of digit
                    let digitArray = [];
                    for (let i = 0; i < answer.length; i++) {
                        let figure = parseInt(answer.charAt(i));
                        //Creation of a digit object according to its figure value
                        digitArray.push(new Digit(figure, DD.digits[figure].grid))
                    }
                    //Print the array
                    SD.ShowAllDigits(digitArray);
                } else { // Wrong entry bis
                    console.log("Wrong input, try typing only numbers positive numbers with less than 20 figures\n");
                }
                recursiveAsyncReadline();
            }
        });
    };
    recursiveAsyncReadline();
}


