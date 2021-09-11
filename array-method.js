    // array of object
const products = [
    { name: 'leptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'wathc', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'leptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brands = products.map(product => product.brand) // map function আমাদের একটা array রিট্রান করে । 
// map function  প্রতেক টা array  এর মধ্যে Loop  করে করে single Object কে array এর মধ্যে রিটার্ন করে ।

console.log(brands); // output [ 'lenovo', 'iphone', 'casio', 'ribon', 'lenovo', 'canon' ]

const price = products.map(product => product.price) // all price in a array .

console.log(price); // output [ 32000, 7000, 3000, 300, 32000, 9000 ]

// for eatch // কোন কিছু return করবে না কিন্তু array কিছু করতে হবে তখন forEtch  ব্যাবহার করা লাগবে ।

products.forEach(product => console.log(product.color)) //silver golden yellow black silver gray সুধু string দিছে কোন array or object দেয় নাই ।
products.forEach(product =>{
    console.log(product.price);
    console.log(product.brand);
    console.log(product.name);
})

// filtter (এখানে আমরা কোন সর্ত দিব সেই সর্ত অনুযায়ি কিছু একটা করবে) filtter একটা array return করবে ।

const cheap = products.filter(product => product.price <= 5000); // যারা যারা সর্ত পুরন করেছে তাদের কে তাদের কে return করবে । 
console.log(cheap); // output [ { name: 'wathc', price: 3000, brand: 'casio', color: 'yellow' }, { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' } ]

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// find ( প্রথম যেই টা পাবে সেই টা object return  করবে।)

const special = products.find(product => product.name.includes('n'))
console.log(special); // Output { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' }
