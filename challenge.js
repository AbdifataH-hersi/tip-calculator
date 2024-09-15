// Good Luck! You got this 💪🏾
// Write your code here.


let bill = 275; 
let tip;


if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
} else {
    tip = bill * 0.20;
}


let total = bill + tip;


console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
