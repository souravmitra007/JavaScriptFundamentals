//Introducing Template String and if-else statement
/*
const age = 24;
const firstName = 'Sourav';
const lastName = 'Mitra';

const total = `My name is ${firstName} ${lastName} and my age is ${age}`;

console.log(total);
*/

const markWeight = prompt("Enter Mark's Weight ");
const markHeight = prompt("Enter Mark's Height ");
const johnWeight = prompt("Enter John's Weight ");
const johnHeight = prompt("Enter John's Height ");

const markBmi = markWeight / (markHeight ** 2);
const johnBmi = johnWeight / (johnHeight ** 2);

if(markBmi>johnBmi){
    console.log(`Mark's BMI(${markBmi}) is higher than John's BMI(${johnBmi})`);
}else if(markBmi<johnBmi){
 console.log(`John's BMI(${johnBmi}) is greater than Mark's BMI(${markBmi})`);
}else{
    console.log("Both have the same BMI 😁");
}

