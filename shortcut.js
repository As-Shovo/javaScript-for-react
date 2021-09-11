/* 
false = '', 0, false, null, undefine
trythe = 'almas', 5, true, {}, [] (all things thats not false)
*/

let myVar = 5;
// to check any truty
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0 ;
}
console.log(myVar);

let myMoney = 50;
// we can check negative or falsy anything
if(!myMoney){

}

const money = 80;
let food;
if(money >100){
    food = 'biryani';
}
else{
    food = 'chaa biscuit';
}

// ternary 
let food1 = money>100 ? 'biryani':'biscute';

let dirnk = (money>100 && myVar >100)? 'coke' : 'filter water';


//number to string conversion shortcut
const num1 = 52;
console.log(num1);
const numstr = num1 + '';

// string to number

const input = '560';
const inputNum =+ input;

//

let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive ? showUser() : hideUser() ;
// use && if the left side is true then right side will be executed
isActive && showUser() ;

// use || if the left side is false then right side will be exacuted
isActive || showUser() ;

// toggle Boolean
isActive = !isActive;

