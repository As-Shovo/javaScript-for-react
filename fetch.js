// 1. JSON ==> stringify ==> parse

//  এখানে object 
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
}
// object এখানে সেই object কে JSON এ convert করা হচ্ছে ।
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON); // output {"name":"Sakib Khan","age":32,"movies":["king Khan","Dhakar Mastan"]}

//object আবার সেই JSON-object কে Object  এ করা হচ্ছে ।

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch 

fetch('url') // api url or link
    .then(res => res.json()) // response data convert to json
    .then(data => console.log(data)) // data and console.log (data)
    .catch(err => console.log(err)) // if any error catch and consol.log(err)

// keys, values

const keys = Object.keys(student);
const values = Object.values(student);


// for
const numbers = [12,42,32,23,12];
numbers.forEach(num => console.log(num)); // array  কে আমরা forEach দিয়ে লুপ করব ।
numbers.map(num => num*2);

// For of use array like object for loop

for (const iterator of object) {
    
}

// for in use object for loop
for (const key in object) {
    
}

// Add or remove from an array
const products = [
    { name: 'leptop', price: 32000, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'wathc', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'leptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};

// copy products array and then add newProduct

const newProducts = [...products, newProduct];
        // console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without phone
const remaining = products.filter(product => product.name !== 'phone');
